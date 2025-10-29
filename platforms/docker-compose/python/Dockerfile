# Dockerfile
FROM python:3.8
WORKDIR /app

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/install.sh | sh

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
ENV FLASK_APP=index.py
ENV FLASK_RUN_HOST=0.0.0.0
