const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const userRouteDocs=require('./userDoc');
const postRouteDocs=require('./postDoc');
// const estateRouteDocs=require('./estate')
// const MessageRouteDocs=require('./contact')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Post Backend',
      description: 'post-api.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'https://tresor.onrender.com/',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Post', description: 'Post Routes' },
      { name: 'Auth', description: 'Auth Routes' },
    //   {name:'Estate',description:'Estate Route'},
    //   {name:'Message',description:'Message Route'}
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },
    paths: { ...userRouteDocs.userRouteDocs, ...postRouteDocs.postRouteDocs},
  },
  apis: ['../routes/**/*.js'],
};
const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app) => {
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/documentation.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;