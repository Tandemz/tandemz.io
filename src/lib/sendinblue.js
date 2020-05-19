import React from 'react';

let loaded = false;

export const initializeSendinblue = () => {
  //
  // during server side rendering
  if (typeof window === 'undefined' || !window.document || loaded) {
    return;
  }

  // for local dev
  const body = window.document.getElementsByTagName('body').item(0);
  const script = window.document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute(
    'src',
    'https://sibforms.com/forms/end-form/build/main.js',
  );
  body.appendChild(script);
  loaded = true;

  return;
};

export class SendinblueScript extends React.PureComponent {
  componentDidMount() {
    initializeSendinblue();
  }

  render() {
    // for server side rendering
    if (typeof window !== 'undefined' && !!window.document) {
      return null;
    }
    return <script src="https://sibforms.com/forms/end-form/build/main.js" />;
  }
}
