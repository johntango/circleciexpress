FROM node
MAINTAINER john williams <jrw@mit.edu>

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src
RUN npm install
COPY . /usr/src

ENV NODE_ENV production

EXPOSE 80
CMD ["npm", "start"]

