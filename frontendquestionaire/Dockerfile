FROM node:10.16.2


WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@8.2.1

COPY . /app

CMD ng serve --host 0.0.0.0
