import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/congfig';
import db from './config/db';
const cors = require('cors');



const NAMESPACE = 'server';
const router = express();


//logging

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors());

/*router.use((req,res,next)=>{
    logging.info(NAMESPACE,`METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`);
    res.on('finish',()=>{
        logging.info(NAMESPACE,`METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`,`STATUS - [${res.statusCode}]`);
    });
}) */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});


db.connect()


router.listen(5000,() => {console.log('Server listen on port 5000 !!!')});
