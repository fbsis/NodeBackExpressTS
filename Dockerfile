FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json ./
RUN yarn

COPY . ./

EXPOSE 3000

#CMD yarn dev
CMD yarn prod