# Multi-stage Dockerfile for Next.js production
# Uses Debian-slim images for better compatibility with native dependencies

# 1) Install dependencies
FROM node:20-slim AS deps
WORKDIR /app
# Install production and development dependencies (for build)
COPY package*.json ./
RUN npm ci --silent --no-audit --no-fund

# 2) Build the app
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3) Production image
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Only copy necessary files for running
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
