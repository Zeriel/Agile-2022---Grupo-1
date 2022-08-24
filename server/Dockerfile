#FROM node:12
FROM node:18.7

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install

CMD ["npm", "start"]
