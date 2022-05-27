FROM node:16.13
WORKDIR /code
COPY package.json /code/
RUN npm install
COPY ./ /code/
