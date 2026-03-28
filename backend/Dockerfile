FROM node:22.13.1-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for TypeScript build)
RUN npm ci

# Copy rest of source code
COPY . .

# Build TypeScript to JS
RUN npm run build

# Remove devDependencies after build (keeps image lean)
RUN npm prune --omit=dev

EXPOSE 8080

CMD ["npm", "start"]