const { withPrefix } = require('gatsby');
const { templateCompute } = require('./template');
const _ = require('lodash');

export default function (_url, absolute) {
  const url = templateCompute(_url, {
    APP_URL: process.env.GATSBY_APP_URL || '/',
  });

  if (_.startsWith(url, '#') || _.startsWith(url, 'http')) {
    return url;
  }
  if (absolute) {
    return withPrefix(url, process.env.GATSBY_APP_URL);
  }

  return withPrefix(url);
}
