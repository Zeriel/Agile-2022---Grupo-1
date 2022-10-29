#FROM node:10-alpine
FROM node:18.10-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn install

CMD ["yarn", "start"]