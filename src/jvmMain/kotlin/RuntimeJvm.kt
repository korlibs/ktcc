// https://slideshare.net/RafaelWinterhalter/java-10-java-11-and-beyond
@Suppress("unused")
public/*!*/ open class RuntimeJvm(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = JvmRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls = __syscalls) {
    //val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)
    private val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.nativeOrder())

    final override fun lb(ptr: Int) = HEAP[ptr]
    final override fun sb(ptr: Int, value: Byte): Unit { HEAP.put(ptr, value) }

    final override fun lh(ptr: Int): Short = HEAP.getShort(ptr)
    final override fun sh(ptr: Int, value: Short): Unit { HEAP.putShort(ptr, value) }

    final override fun lw(ptr: Int): Int = HEAP.getInt(ptr)
    final override fun sw(ptr: Int, value: Int): Unit { HEAP.putInt(ptr, value) }

    final override fun ld(ptr: Int): Long = HEAP.getLong(ptr)
    final override fun sd(ptr: Int, value: Long): Unit { HEAP.putLong(ptr, value) }

    final override fun lwf(ptr: Int): Float = HEAP.getFloat(ptr)
    final override fun swf(ptr: Int, value: Float): Unit { HEAP.putFloat(ptr, value) }

    final override fun ldf(ptr: Int): Double = HEAP.getDouble(ptr)
    final override fun sdf(ptr: Int, value: Double): Unit { HEAP.putDouble(ptr, value) }

    private val tempSrc = HEAP.slice()
    private val tempDst = HEAP.slice()
    final override fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> {
        tempDst.clear()
        tempDst.position(ptr.ptr)
        tempDst.limit(ptr.ptr + num)
        for (n in 0 until num) tempDst.put(value.toByte())
        return ptr as CPointer<Unit>
    }

    final override fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        tempSrc.clear()
        tempSrc.position(src.ptr)
        tempSrc.limit(src.ptr + num)

        tempDst.clear()
        tempDst.position(dest.ptr)
        tempDst.limit(dest.ptr + num)

        tempDst.put(tempSrc)

        return dest
    }

    final override fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        return memmove(dest, src, num)
    }

    // @TODO: This shouldn't be necessary
    final override fun _formatF(value: Number): String = "%f".format(value.toFloat())
}

public/*!*/ object JvmRuntimeSyscalls : RuntimeSyscalls {
    val fileHandlers = LinkedHashMap<Int, java.io.RandomAccessFile>()
    var lastFileHandle = 1

    override fun AbstractRuntime.fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> {
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

    override fun AbstractRuntime.fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val available = raf.length() - raf.filePointer
        val temp = ByteArray(prevAligned(kotlin.math.min(available.toLong(), (size * nmemb).toLong()).toInt(), size))
        val readCount = raf.read(temp)
        memWrite(ptr, temp, 0, readCount)
        return readCount / size
    }

    override fun AbstractRuntime.fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val temp = ByteArray(size * nmemb)
        memRead(ptr, temp)
        raf.write(temp)
        return nmemb
    }

    override fun AbstractRuntime.fflush(stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        return 0
    }
    override fun AbstractRuntime.ftell(stream: CPointer<CPointer<Unit>>): Long {
        val raf = fileHandlers[stream.ptr] ?: return 0L
        return raf.filePointer
    }

    override fun AbstractRuntime.fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        raf.seek(ptrHolder[0])
        return 0
    }

    override fun AbstractRuntime.fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        ptrHolder[0] = raf.filePointer
        return 0
    }

    override fun AbstractRuntime.fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        when (whence) {
            0 -> raf.seek(offset)
            1 -> raf.seek(raf.filePointer + offset)
            2 -> raf.seek(raf.length() + offset)
        }
        return 0
    }

    override fun AbstractRuntime.fclose(stream: CPointer<CPointer<Unit>>) {
        val raf = fileHandlers.remove(stream.ptr)
        raf?.close()
    }
}

