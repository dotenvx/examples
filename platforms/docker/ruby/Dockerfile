# Dockerfile
FROM ruby:3.2
WORKDIR /app

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/ | sh

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
EXPOSE 4567

# Prepend dotenvx run
CMD ["dotenvx", "run",  "--env-file=.env.production", "--", "ruby", "index.rb", "-o", "0.0.0.0"]
