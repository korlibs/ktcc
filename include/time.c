clock_t clock () {
    __kotlin__global__(`
        @OptIn(kotlin.time.ExperimentalTime::class)
        private val start = kotlin.time.TimeSource.Monotonic.markNow()
    `);
    __kotlin__annotation__("@OptIn(kotlin.time.ExperimentalTime::class)");
    __kotlin__("return start.elapsedNow().inWholeMilliseconds.toLong()");
}
