import org.jetbrains.kotlin.gradle.plugin.*
import org.jetbrains.kotlin.gradle.plugin.mpp.*
import org.jetbrains.kotlin.gradle.tasks.*

plugins {
    kotlin("multiplatform") version "1.3.20"
    idea
}

apply(plugin = "kotlin-dce-js")


repositories {
    mavenLocal()
    mavenCentral()
}

fun KotlinOnlyTarget<*>.mainDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["main"].dependencies(block)
}

fun KotlinOnlyTarget<*>.testDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["test"].dependencies(block)
}

operator fun File.get(key: String) = File(this, key)
var File.textContent get() = this.readText(); set(value) = run { this.writeText(value) }

val jsIndex = file("src/jsMain/resources/index.html")
jsIndex.textContent = jsIndex.textContent.replace(Regex("Kotlin C Compiler WIP Version ([\\d\\.]*)"), "Kotlin C Compiler WIP Version $version")

file("src/commonMain/kotlin/com/soywiz/ktcc/internal/version.kt").textContent = "package com.soywiz.ktcc.internal\n\ninternal val KTCC_VERSION = \"$version\""
//println(file("src/commonMain/kotlin/com/soywiz/ktcc/internal/version.kt").textContent)


//fun KotlinTargetContainerWithPresetFunctions.common(callback: KotlinOnlyTarget<*>.() -> Unit) {
//    callback(presets.getByName("common").createTarget("common") as KotlinOnlyTarget<*>)
//}

kotlin {
    fun KotlinTarget.configureAll() {
        compilations.all {
            kotlinOptions.freeCompilerArgs = listOf("-progressive", "-Xskip-metadata-version-check")
        }
    }

    dependencies {
        commonMainImplementation("org.jetbrains.kotlin:kotlin-stdlib-common")
        commonTestImplementation("org.jetbrains.kotlin:kotlin-test-annotations-common")
        commonTestImplementation("org.jetbrains.kotlin:kotlin-test-common")
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
        mainDependencies {
            implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
        }
        testDependencies {
            implementation("org.jetbrains.kotlin:kotlin-test")
            implementation("org.jetbrains.kotlin:kotlin-test-junit")
        }
    }
    js {
        configureAll()
        compilations.all {
            kotlinOptions {
                languageVersion = "1.3"
                sourceMap = true
                metaInfo = true
                moduleKind = "umd"
            }
        }
        mainDependencies {
            implementation("org.jetbrains.kotlin:kotlin-stdlib-js")
        }
        testDependencies {
            implementation("org.jetbrains.kotlin:kotlin-test-js")
        }
    }

    fun KotlinOnlyTarget<KotlinNativeCompilation>.configureNative() {
        configureAll()
        compilations["main"].outputKinds("EXECUTABLE")
    }

    macosX64 { configureNative() }
    linuxX64 { configureNative() }
    mingwX64 { configureNative() }

    sourceSets {
        val nativeCommonMain = this.create("nativeCommonMain")
        val nativeCommonTest = this.create("nativeCommonTest")

        configure(listOf(this.getByName("macosX64Main"), this.getByName("linuxX64Main"), this.getByName("mingwX64Main"))) {
            dependsOn(nativeCommonMain)
        }
    }
}

val mainClassName = "com.soywiz.ktcc.cli.CLI"

val jsCompilations = kotlin.targets["js"].compilations

tasks {
    val runDceJsKotlin = named<KotlinJsDce>("runDceJsKotlin").get()
    create<Jar>("fatJar") {
        archiveBaseName.set("${project.name}-all")
        archiveVersion.set(null as String?)

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

    create<Copy>("jsWebResources") {
        dependsOn(runDceJsKotlin)
        into(rootDir["docs"])
        includeEmptyDirs = false
        from(kotlin.sourceSets["jsMain"].resources)
        from(kotlin.sourceSets["commonMain"].resources)
    }

    create<Copy>("jsWebDce") {
        dependsOn("jsWebResources", runDceJsKotlin)
        into(rootDir["docs"])
        includeEmptyDirs = false
        exclude("**/*.kjsm", "**/*.kotlin_metadata", "**/*.kotlin_module", "**/*.MF", "**/*.meta.js", "**/*.map")
        afterEvaluate {
            from(runDceJsKotlin.destinationDir)
        }
    }
    create<Copy>("jsWeb") {
        dependsOn("jsWebResources", "jsMainClasses")
        into(rootDir["docs"])
        includeEmptyDirs = false
        exclude("**/*.kjsm", "**/*.kotlin_metadata", "**/*.kotlin_module", "**/*.MF", "**/*.meta.js", "**/*.map")
        from(jsCompilations["main"].output.allOutputs)
        afterEvaluate {
            for (f in (jsCompilations["main"] as KotlinJsCompilation).runtimeDependencyFiles) if (f.exists() && !f.isDirectory()) from(zipTree(f.absolutePath))
        }
    }
}

//compilations.all {
//    kotlinOptions {
//        freeCompilerArgs = ["-progressive", "-Xskip-metadata-version-check"]
//    }
//}

idea {
    module {
        excludeDirs = setOf(file(".gradle"), file("@old"), file("doc"), file("docs"), file("samples"), file("gradle"))
    }
}