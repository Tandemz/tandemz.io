import { loadCrisp, unloadCrisp } from './crisp';

(function () {
  if (typeof window === 'undefined' || !window.document) {
    return;
  }

  function getCookie(name) {
    const re = new RegExp(name + '=([^;]+)');
    const value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : 'no';
  }

  setInterval(() => {
    if (
      getCookie('cky-consent') == 'yes' &&
      getCookie('cookieyes-functional') == 'yes'
    ) {
      loadCrisp();
    } else {
      unloadCrisp();
    }
  }, 500);
})();
