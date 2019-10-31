const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { models } = require('./src/models');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.get('/*', function(req, res, next) {
//   res.setHeader('Last-Modified', new Date().toUTCString());
//   next();
// });

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.disable('etag');

app.get('/test', (req, res) => {
  res.send('yay!');
});

app.get('/tips', async (req, res) => {
  const tips = await req.context.models.Tip.find();
  res.status(200);
  res.json(tips);
});

app.post('/tips', async (req, res) => {
  console.log(req.body);
  const tip = new models.Tip({ ...req.body });

  await tip.save();

  res.send(tip);
});

module.exports = app;
