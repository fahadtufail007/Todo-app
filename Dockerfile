FROM node:14.17.3

# set environment variables
ENV PORT 3000
ENV REACT_APP_API_URL "http://0.0.0.0:3000/api"
    

# set working directory and install node modules
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json .
RUN npm install

COPY . .
