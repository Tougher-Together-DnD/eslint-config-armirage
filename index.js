/*eslint-env node */

/*! version: 1.0.0 !*/
/*! author: Clinton Mulligan !*/
/*! license: BSD 3-Clause License !*/
/*! Copyright (c) 2020, Clinton Mulligan. All rights reserved. !*/
/*! https://github.com/armirage/eslint-config-armirage/blob/master/LICENSE.md !*/

module.exports = {
  "extends": [
      "./configs/eslintrc.json",
  ].map(require.resolve),
  "rules": {},
};
