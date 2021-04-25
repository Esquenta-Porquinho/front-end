FROM node:lts-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY prod/nginx/nginx.conf /etc/nginx/conf.d
