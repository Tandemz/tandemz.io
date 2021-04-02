/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const safePrefix = require('./src/utils/safePrefix').default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    <script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/62e51a8a40555d6b551204f7.js"
    ></script>,
  ]);
  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix('assets/js/plugins.js')} />
      <script src={safePrefix('assets/js/init.js')} />
      <script src={safePrefix('assets/js/main.js')} />
    </React.Fragment>,
  ]);
};
