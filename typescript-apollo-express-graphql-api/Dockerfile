FROM node:16.13.0-alpine3.11

WORKDIR /server/app

# add `/server/node_modules/.bin` to $PATH
ENV PATH /server/app/node_modules/.bin:$PATH

# install server dependencies
COPY ./typescript-apollo-express-graphql-api/package.json /server/app
COPY ./typescript-apollo-express-graphql-api/package-lock.json /server/app
RUN npm install
# --silent

# add server
COPY ./typescript-apollo-express-graphql-api /server/app

# start server
CMD ["npm", "run", "start:dev"]