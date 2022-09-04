FROM node:16

WORKDIR /handdown/
COPY . /handdown/

RUN yarn install
RUN yarn build
CMD yarn start
