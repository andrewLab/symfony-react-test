FROM node:alpine AS asset-build

COPY ./ /src
WORKDIR /src
RUN npm i && npm run build


FROM php:fpm-alpine

RUN apk --update --no-cache add git
RUN docker-php-ext-install pdo_mysql
COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
COPY ./ ./
RUN composer install

COPY --from=asset-build /src/public/build ./public/build

CMD ["php-fpm"]
EXPOSE 9000