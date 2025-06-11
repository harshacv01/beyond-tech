# --- Builder Stage ---
FROM node:20.15.0-alpine AS builder

# Set working directory
WORKDIR /usr/etc/app

# Install dependencies required for build
RUN apk add --no-cache libc6-compat

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy the application source code
COPY . .

# Build the Next.js application
RUN pnpm run build

# --- Runtime Stage ---
FROM node:20.15.0-alpine AS runtime

# Set working directory
WORKDIR /usr/etc/app
ENV NODE_ENV=production

# Copy only necessary built files
COPY --from=builder /usr/etc/app/.next/standalone ./
COPY --from=builder /usr/etc/app/.next/static ./.next/static
COPY --from=builder /usr/etc/app/public public
COPY --from=builder /usr/etc/app/package.json package.json
COPY --from=builder /usr/etc/app/node_modules node_modules

# Expose port 3000
EXPOSE 3000

# Start the standalone Next.js application
CMD ["node", "server.js"]
