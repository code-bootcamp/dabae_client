FROM node:14

WORKDIR /f7b3_team03_client/
COPY . /f7b3_team03_client/

RUN yarn install
RUN yarn build

CMD yarn start