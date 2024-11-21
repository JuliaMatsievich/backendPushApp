FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY package*.json  ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000/tcp

CMD [ "node", "dist/main.js" ]