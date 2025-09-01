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

# Code Update 1760486903-12232

# Code Update 1760486903-14400

# Additional Implementation 1760486903

# Additional Implementation 1760486903

# Code Update 1760486904-2008

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Code Update 1760486904-20880

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486904

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Code Update 1760486905-31540

# Additional Implementation 1760486905

# Code Update 1760486905-12748

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486906

# Additional Implementation 1760486906

# Additional Implementation 1760486906
