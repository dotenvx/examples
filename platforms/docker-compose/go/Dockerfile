# Dockerfile
FROM golang:1.21.4 as builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .
FROM alpine:latest
WORKDIR /root/

# Install dotenvx
RUN apk --no-cache add curl
RUN curl -fsS https://dotenvx.sh/install.sh | sh
COPY --from=builder /app/.env* ./

COPY --from=builder /app/main .
EXPOSE 1323
