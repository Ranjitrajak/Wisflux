FROM node:alpine

WORKDIR /app_client

COPY package.json ./

RUN npm install

COPY ./ ./


CMD ["npm", "start"]