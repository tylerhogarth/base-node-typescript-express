"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
var app = express_1.default(), port = process.env.PORT_DEFAULT, cors = require('cors'), bodyParser = require('body-parser'), session = require('express-session'), errorhandler = require('errorhandler');
app.use(require('./route'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(errorhandler());
// 404s sent to error handler
app.use((req, res, next) => {
    res.status(404);
    res.send({ error: 'Not found' });
});
if (!process.env.ENV_PRODUCTION) {
    // Send errors to the consumer
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({ 'errors': {
                message: err.message,
                error: err
            } });
    });
}
else {
    // Prevent stack traces being sent to consumer
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({ 'error': 'Internal Server Error' });
    });
}
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map