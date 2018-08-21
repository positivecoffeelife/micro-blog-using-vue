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
To be updated... (however, if you tried to fire up the application as-is, I'm sure it would complain about them basically one at a time.
- Express
- MongoDB
- Vue
- Auth0
- Webpack
- Axios
- Docker

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
