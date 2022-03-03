FROM node:16
COPY . /var/222
WORKDIR /var/www
RUN npm install
EXPOSE 3333