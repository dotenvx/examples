# Dockerfile
FROM node:20
WORKDIR /app

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/ | sh

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Prepend dotenvx run
CMD ["dotenvx", "run",  "--env-file=.env.production", "--", "node", "index.js"]
