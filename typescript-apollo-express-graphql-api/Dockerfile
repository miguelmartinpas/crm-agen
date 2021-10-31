FROM node:16.13.0-alpine3.11

WORKDIR /server/app

# add `/server/node_modules/.bin` to $PATH
ENV PATH /server/app/node_modules/.bin:$PATH

# install server dependencies
RUN ls -la
# COPY ./package.json .
# COPY ./package-lock.json .
RUN npm install --silent

# add server
COPY . .

# start server
CMD ["npm", "run", "start:dev"]