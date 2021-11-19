const path = require('path');
const dotenvPlugin = require('cypress-dotenv');

module.exports = (config) => {
  try {
    const envPath = process.env.CI ? '.env.test' : '.env';

    const envFile = path.resolve(envPath);

    console.log(`info  - Loaded env from ${envFile}`);

    config = dotenvPlugin(config, { path: envFile });
  } catch (e) {}

  return config;
};
