# Dockerfile
FROM php:8.0-apache
WORKDIR /var/www/html

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/install.sh | sh

RUN echo 'PassEnv HELLO' > /etc/apache2/conf-available/passenv.conf
RUN a2enconf passenv
COPY . .
EXPOSE 80
