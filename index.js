'use strict';

var app = require('express')();
var config = require('./config');
var appConfig = require('./appConfig');

/************** Middleware setup ****************/

app.use(require('./middlewares/middleware1')());

app.use(require('./middlewares/loggerSetup')(config, appConfig));

app.use(require('./middlewares/middleware2')());

app.use(require('./middlewares/middleware3')());



/**************** Controller setup ************/


app.get('/hello', require('./controllers/helloHandler'));

app.get('/byebye', require('./controllers/byebyeHandler'));

app.listen(8000);