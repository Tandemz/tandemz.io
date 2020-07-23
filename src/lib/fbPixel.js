const PIXEL_ID = '833968533701882';

if (typeof window !== 'undefined' && !window.fbq) {
  const finalFbq = (window.fbq = function () {
    finalFbq.callMethod
      ? finalFbq.callMethod.apply(finalFbq, arguments)
      : finalFbq.queue.push(arguments);
  });

  if (!window._fbq) window._fbq = finalFbq;
  finalFbq.push = finalFbq;
  finalFbq.loaded = true;
  finalFbq.version = '2.0';
  finalFbq.queue = [];
}

export const loadFbPixel = () => {
  const pixelLoaded = document.getElementById('fb-pixel-script');

  if (!!pixelLoaded) {
    return;
  }
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://connect.facebook.net/en_US/fbevents.js';
  tag.id = 'fb-pixel-script';
  document.getElementsByTagName('head')[0].appendChild(tag);

  window.fbq('init', PIXEL_ID);
  window.fbq('consent', 'grant');
  window.fbq('track', 'PageView');
};

export const revokeConsent = () => {
  window.fbq('consent', 'revoke');
};

