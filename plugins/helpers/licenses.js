'use strict';

var typeOf = require('kind-of');
var utils = require('../../lib/utils');

exports.normalize = function normalize(pkg) {
  var licenses = pkg.licenses;

  if (Array.isArray(licenses) && licenses.length === 1) {
    pkg.license = pkg.licenses[0];
    delete pkg.licenses;
  }

  return pkg;
};
