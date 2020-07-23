const GAID = 'UA-148496948-1';
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    if (window.dataLayer) {
      window.dataLayer.push(arguments);
    }
  }
  gtag('js', new Date());
  gtag('config', GAID);
  window.gtag = gtag;
}

export const loadGA = () => {
  const gaLoaded = document.getElementById('ga-script');
  if (gaLoaded) {
    return;
  }

  if (
    (typeof navigator !== 'undefined' && navigator.doNotTrack == '1') ||
    window.doNotTrack == '1'
  ) {
    return;
  }

  const s = document.createElement('script');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GAID}`;
  s.async = 1;
  s.id = 'ga-script';
  document.getElementsByTagName('head')[0].appendChild(s);
};

