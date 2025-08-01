# main - Dockerfile for FilipRuman
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["node", "index.js"]

# Additional Implementation 1760486903

# Additional Implementation 1760486903

# Additional Implementation 1760486903

# Code Update 1760486903-18704

# Additional Implementation 1760486903

# Additional Implementation 1760486903

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Code Update 1760486904-15786

# Additional Implementation 1760486904

# Code Update 1760486904-5527

# Code Update 1760486904-31906

# Additional Implementation 1760486904

# Code Update 1760486904-26207

# Additional Implementation 1760486904

# Additional Implementation 1760486905

# Code Update 1760486905-15379

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905
