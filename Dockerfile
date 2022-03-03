FROM node:16
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3333