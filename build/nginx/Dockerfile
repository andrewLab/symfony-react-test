FROM nginx:alpine

WORKDIR /etc/nginx
COPY ./nginx.conf ./nginx.conf
COPY ./conf.d/ ./conf.d/
COPY ./sites/ ./sites-available/

WORKDIR /var/www
CMD ["nginx"]
EXPOSE 80