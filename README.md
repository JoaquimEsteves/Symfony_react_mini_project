# How to build

`docker-compose up --build`

Server will now be available At localhost:8005
And the front end will be available at localhost:5000
## Access the bash with

`docker exec -it <CONTAINER ID> /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"`