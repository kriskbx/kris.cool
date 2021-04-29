FROM node:15 AS node

COPY . /var/www
WORKDIR /var/www

RUN yarn install && \
    yarn build && \
    rm -Rf node_modules

FROM nginx:1.17-alpine
MAINTAINER "Kris Siepert <m@kris.cool>"

# Make sure www-data exists
RUN set -x ; \
addgroup -g 82 -S www-data ; \
adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

# Configure nginx
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# Add code
COPY --from=node /var/www/dist /var/www/

RUN chown -R www-data: /var/www
WORKDIR /var/www

CMD ["nginx", "-g", "daemon off;"]
