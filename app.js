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

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486905

# Additional Implementation 1760486906

# Additional Implementation 1760486906

# Additional Implementation 1760486906

# Code Update 1760486906-5697

# Additional Implementation 1760486906

# Additional Implementation 1760486906

# Code Update 1760486906-26095

# Code Update 1760486907-23656

# Additional Implementation 1760486907

# Code Update 1760486907-31520

# Code Update 1760486907-4206

# Code Update 1760486907-12627

# Additional Implementation 1760486907

# Code Update 1760486907-28290

# Additional Implementation 1760486907

# Code Update 1760486907-4565

# Code Update 1760486908-4544

# Additional Implementation 1760486908

# Additional Implementation 1760486908

# Additional Implementation 1760486908

# Code Update 1760486908-3069

# Code Update 1760486908-15233

# Code Update 1760486908-15176

# Additional Implementation 1760486908

# Additional Implementation 1760486909

# Code Update 1760486909-18400

# Additional Implementation 1760486909

# Code Update 1760486909-30500

# Additional Implementation 1760486909

# Code Update 1760486909-22853

# Additional Implementation 1760486909

# Code Update 1760486909-24790

# PR Merge: 2025-10-15 - feature/merge-2599
