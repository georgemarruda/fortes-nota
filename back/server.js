'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://admin:admin@cluster0.utpjp.gcp.mongodb.net/notadevdb?retryWrites=true&w=majority"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('MondoDB OK!!')
})

mongoose.connection.on('error', (error) => {
    console.log('MondoDB não COnectado. Está com o erro: ' + error)
})

const productRoutes = require('./routes/products.routes');
const questionRoutes = require('./routes/questions.routes')
const userRoutes = require('./routes/user.routes')
const answerRoutes = require('./routes/answer.routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors:{
                origin: ['*']
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return { message: 'API no Ar!!' };
        }
    });

    server.route(productRoutes)
    server.route(questionRoutes)
    server.route(userRoutes)
    server.route(answerRoutes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();