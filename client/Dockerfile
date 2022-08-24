FROM node:10-alpine
#FROM node:18.7-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn install

CMD ["yarn", "start"]