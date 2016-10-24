FROM nginx:1.11-alpine

VOLUME ['/usr/share/nginx/html']

RUN apk add --no-cache nodejs
RUN npm install -g yarn

RUN yarn
