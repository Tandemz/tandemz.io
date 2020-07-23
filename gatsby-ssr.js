/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const safePrefix = require('./src/utils/safePrefix').default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
  const GAID = 'UA-148496948-1';
  const scripts = `
  var finalFbq = function () {
    finalFbq.callMethod
      ? finalFbq.callMethod.apply(finalFbq, arguments)
      : finalFbq.queue.push(arguments);
  };

  if (!window._fbq) window._fbq = finalFbq;
  if (!window.fbq) window.fbq = finalFbq;

  finalFbq.push = finalFbq;
  finalFbq.loaded = true;
  finalFbq.version = '2.0';
  finalFbq.queue = [];

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    if (window.dataLayer) {
      window.dataLayer.push(arguments);
    }
  }
  gtag('js', new Date());
  gtag('config', '${GAID}');
  window.gtag = gtag;

  window.CRISP_WEBSITE_ID = '3c3962c2-843b-4835-84db-3717ddde1c4c';
  window.$crisp = [];
  `;

  setHeadComponents([
    <script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/62e51a8a40555d6b551204f7.js"
    ></script>,
  ]);
  setPostBodyComponents([
    <React.Fragment>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: scripts }}
      />
      <script src={safePrefix('assets/js/plugins.js')} />
      <script src={safePrefix('assets/js/init.js')} />
      <script src={safePrefix('assets/js/main.js')} />

      <script
        type="text/javascript"
        data-cookieyes="cookieyes-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=UA-148496948-1"
        async
      ></script>
      <script
        type="text/javascript"
        data-cookieyes="cookieyes-functional"
        src="https://client.crisp.chat/l.js"
        async
      ></script>
      <script
        type="text/javascript"
        data-cookieyes="cookieyes-advertisement"
        src="https://connect.facebook.net/en_US/fbevents.js"
        async
      ></script>
    </React.Fragment>,
  ]);
};
