import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

var app = express(),
  port = process.env.PORT_DEFAULT,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  errorhandler = require('errorhandler');

app.use(require('./route'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

app.use(errorhandler());

// 404s sent to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  res.send({ error: 'Not found' });
});

if (!process.env.ENV_PRODUCTION) {
  // Send errors to the consumer
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
} else {
  // Prevent stack traces being sent to consumer
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json( { 'error': 'Internal Server Error' } );
  });
}

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
