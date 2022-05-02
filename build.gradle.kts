import org.gradle.api.tasks.testing.logging.TestLogEvent
import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler
import org.jetbrains.kotlin.gradle.plugin.KotlinTarget
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinJsCompilation
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinJvmCompilation
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinOnlyTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinJsDce
import org.jetbrains.kotlin.konan.properties.*
import org.jetbrains.kotlin.konan.util.*

//buildscript {
//    repositories {
//        mavenLocal()
//        mavenCentral()
//        maven { url = uri("https://kotlin.bintray.com/kotlin-dev") }
//    }
//    val kotlinVersion = "1.3.50-release-105"
//    dependencies {
//        classpath("org.jetbrains.kotlin.jvm:org.jetbrains.kotlin.jvm.gradle.plugin:$kotlinVersion")
//    }
//}

plugins {
    kotlin("multiplatform") version "1.6.21" apply true
    //kotlin("multiplatform") version "1.3.41" apply true
    //kotlin("multiplatform") version "1.3.50-release-105"
    //id("kotlinx-serialization") version "1.3.41"
    idea
}

//apply(plugin = "org.jetbrains.kotlin.multiplatform")
apply(plugin = "kotlin-dce-js")

repositories {
    mavenLocal()
    mavenCentral()
    maven { url = uri("https://kotlin.bintray.com/kotlinx") }
    //maven { url = uri("https://kotlin.bintray.com/kotlin-dev") }
}


fun KotlinOnlyTarget<*>.mainDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["main"].dependencies(block)
}

fun KotlinOnlyTarget<*>.testDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["test"].dependencies(block)
}

operator fun File.get(key: String) = File(this, key)
var File.textContent get() = this.readText(); set(value) = run { this.writeText(value) }

//val jsIndex = file("src/jsMain/resources/index.html")
//jsIndex.textContent = jsIndex.textContent.replace(Regex("Kotlin C Compiler WIP Version ([\\d\\.]*)"), "Kotlin C Compiler WIP Version $version")

file("build/gen/kotlin/com/soywiz/ktcc/internal/version.kt").also { it.parentFile.mkdirs() }.textContent = "package com.soywiz.ktcc.internal\n\ninternal val KTCC_VERSION = \"$version\""
//println(file("src/commonMain/kotlin/com/soywiz/ktcc/internal/version.kt").textContent)

//fun KotlinTargetContainerWithPresetFunctions.common(callback: KotlinOnlyTarget<*>.() -> Unit) {
//    callback(presets.getByName("common").createTarget("common") as KotlinOnlyTarget<*>)
//}

//val enableNative = false
val enableNative = System.getenv("KTCC_NO_ENABLE_NATIVE").isNullOrBlank()

kotlin {
    fun KotlinTarget.configureAll() {
        compilations.all {
            //kotlinOptions.freeCompilerArgs = listOf("-progressive", "-Xskip-metadata-version-check")
        }
    }

    //metadata {
    //    mainDependencies {
    //        implementation("org.jetbrains.kotlin:kotlin-stdlib-common")
    //    }
    //    testDependencies {
    //        implementation("org.jetbrains.kotlin:kotlin-test-annotations-common")
    //        implementation("org.jetbrains.kotlin:kotlin-test-common")
    //    }
    //}

    //common {
    //}

    jvm {
        configureAll()
    }
    js {
        configureAll()
        browser()
        compilations.all {
            kotlinOptions {
                sourceMap = true
                metaInfo = true
                moduleKind = "umd"
            }
        }
    }

    fun KotlinNativeTarget.configureNative() {
        configureAll()
        binaries {
            executable()
        }
    }

    if (enableNative) {
        macosArm64 { configureNative() }
        macosX64 { configureNative() }
        linuxX64 { configureNative() }
        mingwX64 { configureNative() }

        sourceSets {
            val nativeCommonMain = this.create("nativeCommonMain")
            val nativeCommonTest = this.create("nativeCommonTest")

            configure(listOf(this.getByName("macosX64Main"), this.getByName("macosArm64Main"), this.getByName("linuxX64Main"), this.getByName("mingwX64Main"))) {
                dependsOn(nativeCommonMain)
            }
        }
    }

    sourceSets["commonMain"].kotlin.srcDir("build/gen")

    dependencies {
        //val serializationRuntimeVersion = "0.11.1"
        //commonMainImplementation("org.jetbrains.kotlinx:kotlinx-serialization-runtime:$serializationRuntimeVersion")
        //add("jsMainImplementation", "org.jetbrains.kotlinx:kotlinx-serialization-runtime-js:$serializationRuntimeVersion")

        commonMainImplementation("org.jetbrains.kotlin:kotlin-stdlib-common")
        commonTestImplementation("org.jetbrains.kotlin:kotlin-test-annotations-common")
        commonTestImplementation("org.jetbrains.kotlin:kotlin-test-common")
        add("jsTestImplementation", "org.jetbrains.kotlin:kotlin-test-js")
        add("jvmTestImplementation", "org.jetbrains.kotlin:kotlin-test-junit")
        add("jvmTestImplementation", "junit:junit:4.12")
        add("jvmMainImplementation", "org.jetbrains.kotlin:kotlin-compiler")

        // Scripting
        //add("jvmMainImplementation", "org.jetbrains.kotlin:kotlin-script-runtime")
        //add("jvmMainImplementation", "org.jetbrains.kotlin:kotlin-scripting-compiler")
        //add("jvmMainImplementation", "org.jetbrains.kotlin:kotlin-scripting-jsr223")
    }
}

val mainClassName = "com.soywiz.ktcc.cli.CLI"

val jsCompilations = kotlin.targets["js"].compilations

val GENERATED_DO_NOT_MODIFY = "// GENERATED. Do not modify"

fun String.escapeTripleQuote(): String {
    return this.replace("$", "\${DOLLAR}").replace("\"\"\"", "\${TRIPLET}")
}

fun generateIncludes(): String {
    val lines = arrayListOf<String>()
    lines += GENERATED_DO_NOT_MODIFY
    lines += "package com.soywiz.ktcc.headers"
    lines += "private val DOLLAR = '$'"
    lines += "private val TRIPLET = \"\\\"\\\"\\\"\""
    lines += "val CStdIncludes = CIncludes().apply {"

    val includeDir = File(rootDir, "include").absoluteFile
    for (file in includeDir.walkTopDown().toList().sortedBy { it.absolutePath }) {
        if (!file.name.endsWith(".h")) continue
        val ktFile = File(file.absolutePath.removeSuffix(".h") + ".kt")
        val cFile = File(file.absolutePath.removeSuffix(".h") + ".c")
        //println(file)
        lines += buildString {
            append("FILE(\"${file.relativeTo(includeDir).path}\", \"\"\"${file.readText().escapeTripleQuote()}\"\"\"")
            if (ktFile.exists()) append(", ktImpl = \"\"\"${ktFile.readText().escapeTripleQuote()}\"\"\"")
            if (cFile.exists()) append(", cImpl = \"\"\"${cFile.readText().escapeTripleQuote()}\"\"\"")
            append(")")
        }
    }

    lines += "}.map.toMap()"
    lines += ""
    return lines.joinToString("\n")
}

File(rootDir, "build/gen/kotlin/com/soywiz/ktcc/headers/CStdIncludesGenerated.kt").also { it.parentFile.mkdirs() }.writeText(generateIncludes())
File(rootDir, "build/gen/kotlin/com/soywiz/ktcc/gen/KotlinGen.kt").also { it.parentFile.mkdirs() }.writeText(
    "$GENERATED_DO_NOT_MODIFY\n" +
        "package com.soywiz.ktcc.gen\n\n" +
        "private val DOLLAR = '$'\n" +
        "private val TRIPLET = \"\\\"\\\"\\\"\"\n" +
        "val KotlinRuntime = \"\"\"${File(rootDir, "src/commonMain/kotlin/Runtime.kt").readText().escapeTripleQuote()}\"\"\"\n" +
        "val KotlinRuntimeJvm = \"\"\"${File(rootDir, "src/jvmMain/kotlin/RuntimeJvm.kt").readText().escapeTripleQuote()}\"\"\"\n"
)

tasks {
    val runDceJsKotlin = named<KotlinJsDce>("runDceJsKotlin").get()
    create<Jar>("fatJar") {
        duplicatesStrategy = org.gradle.api.file.DuplicatesStrategy.INCLUDE
        archiveBaseName.set("${project.name}-all")
        //archiveVersion.set(null as String?)
        archiveVersion.set("")
        archiveAppendix.set("")

        manifest {
            attributes("Main-Class" to mainClassName)
        }

        afterEvaluate {
            for (it in (kotlin.targets["jvm"].compilations["main"] as KotlinJvmCompilation).runtimeDependencyFiles) {
                from(if (it.isDirectory) it else zipTree(it))
            }
        }

        with(named<Jar>("jvmJar").get())
    }

    val jsWebResourcesDce = create<Copy>("jsWebResourcesDce") {
        dependsOn(runDceJsKotlin)
        into(rootDir["docs"])
        includeEmptyDirs = false
        from(kotlin.sourceSets["jsMain"].resources)
        from(kotlin.sourceSets["commonMain"].resources)
    }

    val jsWebResources = create<Copy>("jsWebResources") {
        dependsOn("jsMainClasses")
        into(rootDir["docs"])
        includeEmptyDirs = false
        from(kotlin.sourceSets["jsMain"].resources)
        from(kotlin.sourceSets["commonMain"].resources)
    }


    create<Copy>("jsWebDce") {
        dependsOn(jsWebResourcesDce)
        into(rootDir["docs"])
        includeEmptyDirs = false
        exclude("**/*.kjsm", "**/*.kotlin_metadata", "**/*.kotlin_module", "**/*.MF", "**/*.meta.js", "**/*.map")
        afterEvaluate {
            from(runDceJsKotlin.destinationDir)
        }
    }
    create<Copy>("jsWeb") {
        dependsOn(jsWebResources)
        into(rootDir["docs"])
        includeEmptyDirs = false
        exclude("**/*.kjsm", "**/*.kotlin_metadata", "**/*.kotlin_module", "**/*.MF", "**/*.meta.js", "**/*.map")
        from(jsCompilations["main"].output.allOutputs)
        afterEvaluate {
            for (f in (jsCompilations["main"] as KotlinJsCompilation).runtimeDependencyFiles) if (f.exists() && !f.isDirectory()) from(zipTree(f.absolutePath))
        }
    }
    create<Task>("buildDockerImage") {
        afterEvaluate {
            dependsOn("linkReleaseExecutableLinuxX64")
        }
        doLast {
            exec { commandLine = listOf("docker", "build", ".", "-t", "soywiz/ktcc:latest") }
        }
    }
    create<Task>("buildDockerImageAndPublish") {
        dependsOn("buildDockerImage")
        doLast {
            exec { commandLine = listOf("docker", "push", "soywiz/ktcc:latest") }
        }
    }
}

afterEvaluate {
    tasks.getByName("linuxX64Test").enabled = false
    tasks.getByName("macosArm64Test").enabled = false
    tasks.getByName("macosX64Test").enabled = false
    tasks.getByName("mingwX64Test").enabled = false
}

//compilations.all {
//    kotlinOptions {
//        freeCompilerArgs = ["-progressive", "-Xskip-metadata-version-check"]
//    }
//}

rootProject.plugins.withType(org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin::class.java) {
    //rootProject.the<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>().download = false
}

tasks.withType(Test::class.java).all {
    testLogging {

        setEvents(setOf(TestLogEvent.PASSED,TestLogEvent.SKIPPED,TestLogEvent.FAILED,TestLogEvent.STANDARD_OUT,TestLogEvent.STANDARD_ERROR))
        //setEvents(setOf("skipped", "failed", "standardError"))
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
    }
}

idea {
    module {
        excludeDirs = excludeDirs + setOf(file(".gradle"), file("@old"), file("doc"), file("docs"), file("samples"), file("gradle"), file("build"), file("include"), file(".idea"), file(".github"), file("temp"), file("build/gen"))
    }
}