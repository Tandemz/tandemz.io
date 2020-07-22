import { loadCrisp, unloadCrisp } from './crisp';
(function () {
  function getCookie(name) {
    const re = new RegExp(name + '=([^;]+)');
    const value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : 'no';
  }

  let crispLoaded = false;
  setInterval(() => {
    console.log(
      'INTERVAL',
      crispLoaded,
      getCookie('cky-consent'),
      getCookie('cookieyes-functional'),
    );
    if (
      getCookie('cky-consent') == 'yes' &&
      getCookie('cookieyes-functional') == 'yes'
    ) {
      if (!crispLoaded) {
        loadCrisp();
      }
    } else {
      if (crispLoaded) {
        unloadCrisp();
      }
    }
  }, 500);
})();
