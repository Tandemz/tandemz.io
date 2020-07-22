export const loadCrisp = () => {
  if (typeof window === 'undefined' || !window.document) {
    return;
  }

  const crispLoaded = document.getElementById('crisp-script');
  if (crispLoaded) {
    return;
  }

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = '3c3962c2-843b-4835-84db-3717ddde1c4c';

  const s = document.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = 1;
  s.id = 'crisp-script';
  document.getElementsByTagName('head')[0].appendChild(s);
};

export const unloadCrisp = () => {
  const scriptElement = document.getElementById('crisp-script');
  if (!scriptElement) {
    return;
  }
  scriptElement.remove();
  window.$crisp.push(['do', 'session:reset']);
  window.$crisp.push(['do', 'chat:hide']);
};
