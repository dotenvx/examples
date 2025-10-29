# Dockerfile
FROM rust:latest
RUN rustup default nightly
WORKDIR /app

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/install.sh | sh

COPY . .
ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=20629
RUN cargo build --release
EXPOSE 20629
