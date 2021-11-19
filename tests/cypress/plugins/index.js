const dotenv = require('./dotenv');

module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });

  config = dotenv(config);
  return config;
};
