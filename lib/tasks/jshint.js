'use strict';

module.exports = function(app, env) {
  return function () {
    return app.src('.jshintrc')
      .pipe(app.dest('blah'));
  }
};