FROM oven/bun:1.0.6-slim
WORKDIR /app


COPY bun.lockb /app/bun.lockb
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json

COPY --link backend /app/backend

RUN bun install

EXPOSE 8080
CMD ["bun", "--watch", "backend/api/index.ts"]