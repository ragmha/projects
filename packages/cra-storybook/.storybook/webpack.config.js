const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.plugins.push(new TSDocgenPlugin());
  return config;
};
