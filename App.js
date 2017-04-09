"use strict";
exports.__esModule = true;
// import * as path from 'path';
var express = require("express");
// import * as logger from 'morgan';
var bodyParser = require("body-parser");
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        // this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
exports["default"] = new App().express;
