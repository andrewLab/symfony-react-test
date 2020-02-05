FROM nginx:alpine

WORKDIR /etc/nginx
COPY ./nginx.conf ./nginx.conf
COPY ./conf.d/ ./conf.d/

WORKDIR /var/www
COPY --from=guestbook-app /var/www/public/ ./public/
CMD ["nginx"]
EXPOSE 80