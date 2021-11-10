
docker-compose up

https://studio.apollographql.com/sandbox/explorer and set http://localhost:4000/graphql

recreate docker

docker-compose up --build --force-recreate --no-deps

we need to recreate node_modules for visual studio
in typescript-apollo-express-graphql-api folder run
nvm exec 16.13.0 npm install
