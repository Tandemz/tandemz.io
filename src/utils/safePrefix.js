const { withPrefix } = require('gatsby');
const { templateCompute } = require('./template');
const _ = require('lodash');

export default function (_url, prefix) {
  const url = templateCompute(_url, {
    APP_URL: process.env.GATSBY_APP_URL || '/',
  });

  if (_.startsWith(url, '#') || _.startsWith(url, 'http')) {
    return url;
  }
  const path = withPrefix(url, process.env.GATSBY_APP_URL);
  if (prefix) {
    console.log('CALLED WITH PREFIX');
    console.log('url', url);
    console.log('path', path);
    console.log('res', `${prefix}${path}`);
    console.log('with simple prefix', withPrefix(url));

    return `${prefix}${path}`;
  }
  return path;
}
