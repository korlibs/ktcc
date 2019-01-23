FROM ubuntu:xenial
#FROM lalyos/scratch-chmx

ADD build/bin/linuxX64/mainReleaseExecutable/main.kexe /bin/ktcc
#RUN ["/bin/chmx", "/bin/ktcc"]
RUN ["/bin/chmod", "+x", "/bin/ktcc"]

VOLUME /data
WORKDIR /data

ENTRYPOINT ["/bin/ktcc"]