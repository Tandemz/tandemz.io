/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onInitialClientRender = () => {
  if (
    'onGatsbyInitialClientRender' in window &&
    typeof window.onGatsbyInitialClientRender === 'function'
  ) {
    window.onGatsbyInitialClientRender();
  }
};

exports.onRouteUpdate = () => {
  if (
    'onGatsbyRouteUpdate' in window &&
    typeof window.onGatsbyRouteUpdate === 'function'
  ) {
    window.onGatsbyRouteUpdate();
  }

  if (process.env.NODE_ENV !== `production`) {
    return;
  }

  const sendPageView = () => {
    const pagePath = window.location
      ? window.location.pathname + window.location.search + window.location.hash
      : undefined;
    if (typeof window.gtag === `function`) {
      window.gtag(`event`, `page_view`, { page_path: pagePath });
    }

    if (typeof window.fbq === `function`) {
      window.fbq('track', 'PageView');
    }
  };

  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(sendPageView);
    });
  } else {
    // simulate 2 rAF calls
    setTimeout(sendPageView, 32);
  }
};
