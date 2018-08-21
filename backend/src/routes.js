const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const auth0 = require('auth0');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const router = express.Router();

// retrieve latest micro-posts
router.get('/', async (req, res) => {
  const collection = await loadMicroPostsCollection();
  res.send(
    await collection.find({}).toArray()
  );
});

//validate access here
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://positivecoffeelife.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://micro-blog-app',
  issuer: `https://positivecoffeelife.auth0.com/`,
  algorithms: ['RS256']
});

// insert a new micro-post
router.post('/', checkJwt, async (req, res) => {
  const collection = await loadMicroPostsCollection();
  const token = req.headers.authorization
    .replace('bearer ', '')
    .replace('Bearer ', '')

  const authClient = new auth0.AuthenticationClient({
    domain: 'positivecoffeelife.auth0.com',
    clientId: 'ntQlRZis0vCPqbYsg3ijpkHlZWcBC3fJ'
  });

  authClient.getProfile(token, async (err, userInfo) => {
    if (err){
      return res.status(500).send(err);
    }

    await collection.insertOne({
      text: req.body.text,
      createdAt: new Date(),
      author: {
        sub: userInfo.sub,
        name: userInfo.name,
        picture: userInfo.picture
      }
    });
    res.status(200).send();
  });
});

async function loadMicroPostsCollection() {
  const client = await MongoClient.connect('mongodb://localhost:27017/');
  return client.db('micro-blog').collection('micro-posts');
}

module.exports = router;