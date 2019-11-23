FROM node:lts AS build

WORKDIR /app

ADD . .
RUN yarn install
RUN yarn build

FROM nginx

ADD ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html
