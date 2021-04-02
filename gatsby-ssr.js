/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const safePrefix = require('./src/utils/safePrefix').default;

const gtmId = 'GTM-MZBWH9T';
const GTMEnvs = {
  dev: {
    gtmPreview: 'env-5',
    gtmAuth: '9APlEd5ZFUghA6qmaCok8w',
  },
  staging: {
    gtmPreview: 'env-7',
    gtmAuth: 'WlR5Tyk1UZLjDaikEPK7uQ',
  },
  prod: {
    gtmPreview: 'env-1',
    gtmAuth: '89zgLvQPHqBx2C2wn6XNwg',
  },
};

const env =
  process.env.BRANCH === 'master'
    ? 'prod'
    : process.env.BRANCH === 'staging'
    ? 'staging'
    : 'dev';

const generateGTM = ({ id, environmentParamStr }) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
  `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
  `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
  `'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${environmentParamStr}';f.parentNode.insertBefore(j,f);` +
  `})(window,document,'script','dataLayer', '${id}');`;

const generateGTMIframe = ({ id, environmentParamStr }) =>
  `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}${environmentParamStr}" height="0" width="0" style="display: none; visibility: hidden" aria-hidden="true"></iframe>`;

const generateDefaultDataLayer = (dataLayer) => {
  let result = 'window.dataLayer = window.dataLayer || [];';
  result += `window.dataLayer.push(${JSON.stringify(dataLayer)});`;
  return result;
};

exports.onRenderBody = function ({
  setHeadComponents,
  setPostBodyComponents,
  setPreBodyComponents,
  reporter,
}) {
  const { gtmAuth, gtmPreview } = GTMEnvs[env];
  const environmentParamStr = `&gtm_auth=${gtmAuth}&gtm_preview=${gtmPreview}&gtm_cookies_win=x`;

  let defaultDataLayerCode = generateDefaultDataLayer({
    platform: 'landing',
  });

  setHeadComponents([
    // <script
    //   id="cookieyes"
    //   type="text/javascript"
    //   src="https://cdn-cookieyes.com/client_data/62e51a8a40555d6b551204f7.js"
    // ></script>,
    <script
      key="plugin-google-tagmanager"
      dangerouslySetInnerHTML={{
        __html: `${defaultDataLayerCode} ${generateGTM({
          id: gtmId,
          environmentParamStr,
        })}`,
      }}
    />,
  ]);

  setPreBodyComponents([
    <noscript
      key="plugin-google-tagmanager"
      dangerouslySetInnerHTML={{
        __html: generateGTMIframe({ id: gtmId, environmentParamStr }),
      }}
    />,
  ]);

  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix('assets/js/plugins.js')} />
      <script src={safePrefix('assets/js/init.js')} />
      <script src={safePrefix('assets/js/main.js')} />
    </React.Fragment>,
  ]);
};
