const withImages = require('next-images')
const path = require('path');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'public/images/svg'),
  webpack(config, options) {
    return config
  }
});
