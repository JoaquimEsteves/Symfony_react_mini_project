# How to build

`docker-compose up --build`

Server will now be available At localhost:8005
And the front end will be available at localhost:5000
## Access the bash with

`docker exec -it <CONTAINER ID> /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"`

### Populate the database through the server!

Go to the server container and execute:

`php /symfony-and-react/back-end/server/bin/console app:download-users`
`php /symfony-and-react/back-end/server/bin/console app:download-posts`

Here's a pretty gif of the application working!


![Screenshot](pretty.gif)


## Philosophy

This project features a skeleton Symfony api, a mysql server to house our data and another server that serves a public build of the react front-end.

Note: This project is as production ready as a wheelbarrow is ready to hit the highway. Mostly due to the fact that we're using NPM's serve and the bundled server that comes with Symfony. 


To convert this project into an actual production ready build, we'd have to implement an NGIX / Apache server that would serve our API and front-end files.

The symfony server also features very little security other than basic CORS and the default symfony settings.

### Why so many different servers?

Separating the database from the server is standart operating procedure, however with PHP frameworks it is customary to include your front-end files directly under a public/ folder and to use templating languages as much as possible.

Personally, I dislike all templating languages, they're generally very opinionated and require serious tweaking to get them to work with modern javascript libraries like webpack/react/etc.

By dividing the logic we're able to construct our app as a micro-service; the front-end might be talking to a series of different servers, and replacing one server with another is as simple as changing a url on the typescript files.

Notice, for example, how the front-end makes calls both to the Symfony server (under localhost:8005) and a separate API (under https://robohash.org/). 

Neither of those two servers care about how front-end is implemented, and the front-end doesn't care much either.

### Why React?

It's the javascript framework I'm most familiar with, and I had developed a very similar project to the required front-end in the past.

#### Why use Hooks/Redux/Typescript/Sass?

Mostly to show profficiency and to learn them for fun.

#### Why use pigeon-maps instead of [Leaflet](https://leafletjs.com)

I've had a previous experience working with pigeon-maps, which is a React-library with 0 dependencies and contains a gzipped size which is smaller than the equivalent React-Leaflet package.

The packages are also incredibly similar, given that they both use the OpenStreetMap api.

Finally, it's also the first open source project I've made a small contribution to, so there's some sentimental value to it.

[See](https://github.com/mariusandra/pigeon-maps/issues/69)

[and](https://github.com/mariusandra/pigeon-maps/pull/70)