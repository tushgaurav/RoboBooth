FROM node:20.12.2 as build
WORKDIR /main

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","run", "dev"]