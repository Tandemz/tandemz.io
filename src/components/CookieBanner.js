import React, { useState } from 'react';

const STORAGE_KEY = 'TANDEMZ_ACCEPTED_COOKIES';

const CookieBanner = () => {
  const ssr = typeof localStorage === 'undefined';

  const [accepted, setAccepted] = useState(
    ssr ? false : localStorage.getItem(STORAGE_KEY) || false,
  );
  const onAccept = () => {
    setAccepted(true);
    if (!ssr) {
      localStorage.setItem(STORAGE_KEY, true);
    }
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>🍪 Nous utilisons des cookies pour améliorer votre expérience.</p>
      <div className="cookie-banner__button-container">
        <a href="/confidentialité-et-protection-des-données">En savoir plus</a>
        <button onClick={onAccept}>J'ai compris</button>
      </div>
    </div>
  );
};

export default CookieBanner;
