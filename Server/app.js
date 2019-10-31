var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

const mock = {
  tips: [
    {
      id: '123',
      title: 'Tip 1',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '1234',
      title: 'Tip 2',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '12345',
      title: 'Tip 3',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
    {
      id: '123456',
      title: 'Tip 4',
      desc:
        'Elit veniam reprehenderit enim veniam aliqua occaecat aute nostrud aliquip sit. Laborum culpa nisi dolore consequat nulla amet veniam mollit aliqua. Id aliquip id quis esse deserunt duis veniam. Aliquip et ad reprehenderit aliqua. Occaecat minim cillum voluptate do ut.',
      link: 'www.google.com',
    },
  ],
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.get('/*', function(req, res, next) {
//   res.setHeader('Last-Modified', new Date().toUTCString());
//   next();
// });

app.disable('etag');

app.get('/test', (req, res) => {
  res.send('yay!');
});

app.get('/tips', (req, res) => {
  res.status(200);
  res.json(mock);
});

module.exports = app;
