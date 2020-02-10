/* global Weglot */
let weglotPromise = null;

export const initializeWeglot = () => {
  if (weglotPromise) {
    return weglotPromise;
  }
  const body = document.getElementsByTagName('body').item(0);
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'https://cdn.weglot.com/weglot.min.js');
  body.appendChild(script);

  weglotPromise = new Promise(resolve => {
    script.onload = function() {
      Weglot.initialize({
        api_key: 'wg_67fd86c77ab6a28f974dd9686efe3ade5',
      });
      console.info('Weglot initialized');
      resolve();
    };
  });
  return weglotPromise;
};

initializeWeglot();
