const projectRouter = require('./projectRouter')
const userRouter = require('./userRouter')

const routes = (app) => {
  app.use('/api/projects', projectRouter);
  app.use('/api/users', userRouter);
}

module.exports = routes