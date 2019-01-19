FROM base/archlinux
#FROM lalyos/scratch-chmx

ADD build/bin/linuxX64/main/release/executable/work.kexe /bin/ktcc
#RUN ["/bin/chmx", "/bin/ktcc"]
RUN ["/bin/chmod", "+x", "/bin/ktcc"]

VOLUME /data
WORKDIR /data

ENTRYPOINT ["/bin/ktcc"]