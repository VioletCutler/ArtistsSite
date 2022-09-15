const apiRouter = require('express').Router();
const { postsRouter } = require('./posts')

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use('/posts', postsRouter)
// place your routers here

module.exports = apiRouter;