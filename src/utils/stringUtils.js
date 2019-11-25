const clean = require('get-clean-string')();

export const formatString = string => {
  return clean(string)
    .split(' ')
    .join('-');
};
