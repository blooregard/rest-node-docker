# rest-node-docker

This is a sample microservice that uses node.js and MongoDB to expose a RESTful services.

This was heavily inspired by the work of dwmkerr (http://www.dwmkerr.com/learn-docker-by-building-a-microservice/)

# Pre-requisites

You must have Docker installed for this to work.

# Execution

```bash
cd ./rest-node-docker
docker-compose build
docker-compose up
```

Open a browser to <a href="http://localhost:9985/movie/" target="_blank">http://localhost:9985/movie/</a>.  Only GET works currently but will add POST, PUT and DELETE at some point.

Shutdown in another terminal
```bash
docker-compose down
```
