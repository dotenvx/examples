# Dockerfile
FROM ruby:3.2
WORKDIR /app

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/install.sh | sh

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
EXPOSE 4567
