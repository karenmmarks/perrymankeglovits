/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-react'),
    ],
  };
};
