FROM node:20.17.0 as builder

RUN curl -fsSL https://bun.sh/install | bash

ADD . /app
WORKDIR /app

RUN ~/.bun/bin/bun install
RUN ~/.bun/bin/bun run generate

FROM nginx:1.21.5 as server

COPY --from=builder /app/.output/public /usr/share/nginx/html
