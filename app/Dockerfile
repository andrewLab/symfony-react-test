#FROM node:alpine AS asset-build
#
#COPY . /src
#WORKDIR /src
#RUN npm i
#RUN npm run build


FROM php:fpm-alpine

RUN apk --update --no-cache add git
RUN docker-php-ext-install pdo_mysql

WORKDIR /var/www
COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY . .
RUN composer install

#COPY --from=asset-build /src/public/build ./public/build

CMD ["php-fpm"]
EXPOSE 9000