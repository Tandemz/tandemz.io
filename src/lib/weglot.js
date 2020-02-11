/* global Weglot */
import React from 'react';
let weglotPromise = null;

const weglotOptions = {
  api_key: 'wg_67fd86c77ab6a28f974dd9686efe3ade5',
  cache: true,
};

export const initializeWeglot = () => {
  if (weglotPromise) {
    return weglotPromise;
  }

  // during server side rendering
  if (typeof window === 'undefined' || !window.document) {
    return Promise.resolve();
  }

  // after server side rendering
  if (window.Weglot) {
    console.info('Weglot initialized for preloaded script');
    window.Weglot.initialize(weglotOptions);
    weglotPromise = Promise.resolve(window.Weglot);
    return weglotPromise;
  }

  // for local dev
  const body = window.document.getElementsByTagName('body').item(0);
  const script = window.document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'https://cdn.weglot.com/weglot.min.js');
  body.appendChild(script);

  weglotPromise = new Promise(resolve => {
    script.onload = function() {
      Weglot.initialize(weglotOptions);
      console.info('Weglot initialized');
      resolve(Weglot);
    };
  });
  return weglotPromise;
};

export const WeglotScript = () => {
  // for server side rendering
  if (typeof window !== 'undefined' && !!window.document) {
    return null;
  }
  return (
    <script src="https://cdn.weglot.com/weglot.min.js" type="text/javascript" />
  );
};

initializeWeglot();
