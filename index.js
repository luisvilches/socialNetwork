'use estric'
const express = require('express');
const config = require('./settings');
const expressVue = require("express-vue");
const vueConfig = require('./settings/vueConfig');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routesPublic = require('./routes/public');
const routesPrivates = require('./routes/private');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const auth = require('./middlewares/auth');
const body = require('connect-multiparty')();
const expressVueMiddleware = expressVue.init(vueConfig);

mongoose.Promise = global.Promise;

app.use(cors());
app.use(expressVueMiddleware);
app.use(helmet());
app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(express.static(path.join(path.resolve(),config.SERVER.media_url)));
app.use("/",body,routesPublic);
app.use("/auth",auth.auth,body,routesPrivates);


mongoose.connect(utils.db.connectionString()).then(() => {
        console.log('connect database server');
    }).catch(err => {
        console.log(err);
    });


app.listen(config.SERVER.port, err => {
    if(err) throw err;
    console.log('server running in port', config.SERVER.port);
});