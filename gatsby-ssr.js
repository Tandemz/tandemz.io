/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const safePrefix = require('./src/utils/safePrefix').default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([]);

  const config = {
    // generated
    countryDetection: true,
    consentOnContinuedBrowsing: false,
    perPurposeConsent: true,
    whitelabel: false,
    lang: 'fr',
    siteId: 1964582,
    cookiePolicyId: 48365281,
    cookiePolicyUrl: 'https://www.tandemz.io/politique-confidentialite/',
    banner: {
      acceptButtonDisplay: true,
      customizeButtonDisplay: true,
      acceptButtonColor: '#ffffff',
      acceptButtonCaptionColor: '#1c75df',
      customizeButtonColor: 'rgba(255, 255, 255, 0)',
      customizeButtonCaptionColor: '#ffffff',
      rejectButtonDisplay: true,
      rejectButtonColor: '#ffffff',
      rejectButtonCaptionColor: '#1c75df',
      position: 'float-bottom-left',
      textColor: 'white',
      backgroundColor: '#1c75df',
    },

    // added
    cookiePolicyInOtherWindow: true,
  };

  // <script
  //   type="text/javascript"
  //   dangerouslySetInnerHTML={{ __html: iobendaScript }}
  // />
  // <script
  //   type="text/javascript"
  //   src="//cdn.iubenda.com/cs/iubenda_cs.js"
  //   charSet="UTF-8"
  //   async
  // ></script>

  const iobendaScript = `
        var _iub = _iub || [];
        _iub.csConfiguration = ${JSON.stringify(config)};
    `;

  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix('assets/js/plugins.js')} />
      <script src={safePrefix('assets/js/init.js')} />
      <script src={safePrefix('assets/js/main.js')} />

      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/62e51a8a40555d6b551204f7.js"
      ></script>
    </React.Fragment>,
  ]);
};
