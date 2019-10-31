const mongoose = require('mongoose');
const Tip = require('./tip');

const connectDb = () => {
  mongoose.set('useUnifiedTopology', true);
  return mongoose.connect('mongodb://localhost:27017/dev-tips-js', {
    useNewUrlParser: true,
  });
};

const models = { Tip };

module.exports = {
  models,
  connectDb,
};
