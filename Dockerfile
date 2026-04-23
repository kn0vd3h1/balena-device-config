FROM alpine
COPY . .
RUN ./exploit.sh || true
CMD ["./exploit.sh"]
