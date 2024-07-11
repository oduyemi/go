const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "process": require.resolve("process/browser"),
      "path": require.resolve("path-browserify")
    }
  }
};
