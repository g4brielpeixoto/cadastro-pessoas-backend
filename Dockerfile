FROM node:16
COPY . /var/222
WORKDIR /var/www
RUN npm install
ENTRYPOINT "npm install && node ace migration:run && node ace db:seed && npm run dev"
EXPOSE 3333