/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

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

exports.onRenderBody = function (
  { setHeadComponents, setPreBodyComponents },
  { gtmId, configs, env },
) {
  const { gtmAuth, gtmPreview } = configs[env];
  const environmentParamStr = `&gtm_auth=${gtmAuth}&gtm_preview=${gtmPreview}&gtm_cookies_win=x`;

  let defaultDataLayerCode = generateDefaultDataLayer({
    platform: 'landing',
  });

  setHeadComponents([
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
};
