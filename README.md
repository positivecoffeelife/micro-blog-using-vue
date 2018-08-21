# Hi There! This is just a simple micro blog app test.

## Using Vue.js, Auth0, API, Express, Webpack, and MongoDB

## Purpose
To have a working example of a blog/comment posting section, trying out Vue.js with some authentication.
These techniques can be applied to CRUD applications. Forthcoming updates to this README will happen, as well, maybe with package install commands, etc.

## Un-Authenticated Users:
Posts are Read-only.

## Authenticated Users:
Posting and reading of posts possible.

## Tech Used:
Vue.js, Auth0, Express, and MongoDB (within a Docker container)

## Dependencies:
To be updated... (however, if you tried to fire up the application as-is, I'm sure it would complain about them basically one at a time. Versions indicated at time of build.
- Express
- MongoDB
- Vue
- Auth0
- Webpack
- Axios 
- Docker (Version 18.06.0-ce-mac70 (26399))
- Cors
- Helmet
- bodyParser

## Installs
If you get an error running a ``-g`` install, then simply prepend ``sudo `` to your command or run as Administrator. 
- ``npm install -g vue-cli``
- ``vue init webpack client``
- ``npm install -g express body-parser cors mongodb morgan helmet``
- ``npm install -g axios auth0-web@1.7.0 express-jwt jwks-rsa auth0``

## Information
- ``http://localhost:8080/`` this is where the blog post page will be active
- ``http://localhost:8081/`` this is a mock connection to our database running in our Docker container

## Troubleshooting
Sometimes the local session on port 8081 gets stuck open.  To correct this, we want to kill the process.
To do so:
- Open up a command line prompt, navigating to the ``backend`` directory
- Use ``Ctrl + C`` to stop anything currently running or port listening.
- Issue ``lsof -i tcp:8081``
- Get the PID
- Issue ``kill -15 enteryourPIDnumberhere``
- We use "-15" instead of "-9" because we want to give the process thread a chance to clean up instead of potentially leaving any open threads.

# Thanks for stopping by and checking it out!
I hope this helps you!
