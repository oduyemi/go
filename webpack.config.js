const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "process": require.resolve("process/browser"),
      "fs": false,  
      "path": require.resolve("path-browserify")
    }
  }
};
