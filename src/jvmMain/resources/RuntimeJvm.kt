open class RuntimeJvm(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR) {
    val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)

    override fun lb(ptr: Int) = HEAP[ptr]
    override fun sb(ptr: Int, value: Byte): Unit = run { HEAP.put(ptr, value) }

    override fun lh(ptr: Int): Short = HEAP.getShort(ptr)
    override fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }

    override fun lw(ptr: Int): Int = HEAP.getInt(ptr)
    override fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }

    override fun ld(ptr: Int): Long = HEAP.getLong(ptr)
    override fun sd(ptr: Int, value: Long): Unit = run { HEAP.putLong(ptr, value) }


    val fileHandlers = LinkedHashMap<Int, java.io.RandomAccessFile>()
    var lastFileHandle = 1

    override fun fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> {
        return try {
            val modep = mode.readStringz().replace("b", "")
            val modeAppend = modep.contains("a")
            val modeWrite = modep.contains("w") || modeAppend
            val raf = java.io.RandomAccessFile(file.readStringz(), when {
                modeWrite -> "rw"
                else -> "r"
            })
            if (modeAppend) {
                raf.seek(raf.length())
            }
            val fileHandle = lastFileHandle++
            fileHandlers[fileHandle] = raf
            CPointer<CPointer<Unit>>(fileHandle)
        } catch (e: java.io.FileNotFoundException) {
            CPointer<CPointer<Unit>>(0)
        }
    }

    override fun fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val available = raf.length() - raf.filePointer
        val temp = ByteArray(prevAligned(kotlin.math.min(available.toLong(), (size * nmemb).toLong()).toInt(), size))
        val readCount = raf.read(temp)
        memWrite(ptr, temp, 0, readCount)
        return readCount / size
    }

    override fun fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val temp = ByteArray(size * nmemb)
        memRead(ptr, temp)
        raf.write(temp)
        return nmemb
    }

    override fun fflush(stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        return 0
    }

    override fun ftell(stream: CPointer<CPointer<Unit>>): Long {
        val raf = fileHandlers[stream.ptr] ?: return 0L
        return raf.filePointer
    }

    override fun fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        raf.seek(ptrHolder[0])
        return 0
    }

    override fun fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        ptrHolder[0] = raf.filePointer
        return 0
    }

    override fun fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        when (whence) {
            0 -> raf.seek(offset)
            1 -> raf.seek(raf.filePointer + offset)
            2 -> raf.seek(raf.length() + offset)
        }
        return 0
    }

    override fun fclose(stream: CPointer<CPointer<Unit>>) {
        val raf = fileHandlers.remove(stream.ptr)
        raf?.close()
    }
}