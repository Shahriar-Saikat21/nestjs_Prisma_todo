FROM node:18-alpine

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl openssl-dev libc6-compat

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

# Build the application
RUN npm run build

# Show the build output structure
RUN ls -la dist/src/ && cp -r dist/src/* dist/ && rm -rf dist/src/

EXPOSE 3000

CMD ["npm", "run", "start:prod"]