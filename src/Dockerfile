FROM oven/bun:1.0.4-slim
WORKDIR /app


COPY bun.lockb /app/bun.lockb
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json

COPY next.config.js /app/next.config.js

COPY --link public /app/public
COPY --link src/app /app/src/app


ENV NEXT_TELEMETRY_DISABLED 1


RUN bun install

EXPOSE 3000
CMD ["bun", "dev"]


