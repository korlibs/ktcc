import org.jetbrains.kotlin.gradle.dsl.*
import org.jetbrains.kotlin.gradle.plugin.*
import org.jetbrains.kotlin.gradle.plugin.mpp.*

plugins {
    kotlin("multiplatform") version "1.3.20"
}

repositories {
    mavenCentral()
}

fun KotlinOnlyTarget<*>.mainDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["main"].dependencies(block)
}

fun KotlinOnlyTarget<*>.testDependencies(block: KotlinDependencyHandler.() -> Unit) {
    this.compilations["test"].dependencies(block)
}

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


//compilations.all {
//    kotlinOptions {
//        freeCompilerArgs = ["-progressive", "-Xskip-metadata-version-check"]
//    }
//}

