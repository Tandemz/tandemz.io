import { loadCrisp } from './crisp';
import { loadGA } from './ga';
import { loadFbPixel } from './fbPixel';

(function () {
  if (typeof window === 'undefined' || !window.document) {
    return;
  }
  loadFbPixel();

  function getCookie(name) {
    const re = new RegExp(name + '=([^;]+)');
    const value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : 'no';
  }

  let prevConfig;
  setInterval(() => {
    const cookieConfig = {
      consent: getCookie('cky-consent') === 'yes',
      functional: getCookie('cookieyes-functional') === 'yes',
      analytics: getCookie('cookieyes-analytics') === 'yes',
      performance: getCookie('cookieyes-performance') === 'yes',
      advertisement: getCookie('cookieyes-advertisement') === 'yes',
    };
    if (prevConfig) {
      Object.keys(cookieConfig).forEach((key) => {
        if (prevConfig[key] && !cookieConfig[key]) {
          window.location.reload();
        }
      });
    }
    prevConfig = cookieConfig;

    if (cookieConfig.functional) {
      loadCrisp();
    }

    if (cookieConfig.analytics) {
      loadGA();
    }
  }, 500);
})();
