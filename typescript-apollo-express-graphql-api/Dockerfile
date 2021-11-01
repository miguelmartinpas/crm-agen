FROM node:16.13.0-alpine3.11

WORKDIR /server/app

# add `/server/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install server dependencies
COPY ./typescript-apollo-express-graphql-api/package.json /server
COPY ./typescript-apollo-express-graphql-api/package-lock.json /server
RUN npm install --loglevel verbose
# --silent

# add server
COPY ./typescript-apollo-express-graphql-api /server/app


RUN mkdir -p /server/app/node_modules
RUN cp -r /server/node_modules/* /server/app/node_modules/

# start server
CMD ["npm", "run", "start:dev"]
