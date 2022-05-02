void exit(int status) {
    __kotlin__global__(`class ExitError(val code: Int) : Error()`);
    __kotlin__(`throw ExitError(status)`);
}
