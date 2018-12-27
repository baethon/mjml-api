FROM node:10.15-alpine

ENV NODE_PORT 8080
ENV NODE_HOST 0.0.0.0
ENV NODE_ENV production

WORKDIR /usr/src/app

## System part
RUN mkdir -p /usr/src/app \
  && chown node /usr/src/app

RUN npm i -g pm2 \
  && npm -g cache clean --force

## User part
USER node

COPY --chown=node ["package.json", "yarn.lock", ".yarnclean", "./"]
RUN yarn --frozen-lockfile \
  && yarn cache clean

COPY --chown=node . ./

EXPOSE 8080
CMD ["pm2-docker", "./pm2.yml"]
