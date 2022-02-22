import React, { useState } from 'react';
import _ from 'lodash';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const LeadMagnetBlock = (props) => {
  const section = _.get(props, 'section');
  const title = _.get(section, 'title');
  const inputPlaceholder = _.get(section, 'inputPlaceholder');
  const buttonLabel = _.get(section, 'buttonLabel');
  const formName = _.get(section, 'formName');
  const displayFormInNetlify = _.get(section, 'displayFormInNetlify');
  const section_id = _.get(section, 'section_id');

  const [email, setEmail] = useState(null);
  const [postStatus, setPostStatus] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(props.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        email: email,
      }),
    })
      .then(() => {
        setPostStatus('success');
      })
      .catch(() => setPostStatus('error'));
  };

  return (
    <section
      id={section_id}
      className={'block bg-white outer lead-magnet-section'}
    >
      <div className="form-and-shape-container">
        <div className="form-container">
          <h4 className="title">{title}</h4>
          <form
            name={formName}
            method="POST"
            netlifyHoneypot="bot-field"
            data-netlify={displayFormInNetlify}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={formName} />
            <div className="screen-reader-text">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            <div className="form-row">
              <label className="form-input">
                <span className="screen-reader-text">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder={inputPlaceholder}
                  onChange={handleEmailChange}
                />
              </label>
              <button className="button form-button" type="submit">
                <i className="ri-download-line download-icon" />
                {buttonLabel}
              </button>
            </div>
          </form>
        </div>
        <div className="quarter-circle"></div>
      </div>

      {postStatus === 'error' && (
        <div className="message error-message">
          <svg viewBox="0 0 512 512" className="icon">
            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
          </svg>
          <span className="sib-form-message-panel__inner-text">
            {"Echec de l'envoi du formulaire. Veuillez réessayer."}
          </span>
        </div>
      )}
      {postStatus === 'success' && (
        <div className="message success-message">
          <svg viewBox="0 0 512 512" className="icon">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
          </svg>
          <span className="sib-form-message-panel__inner-text">
            {'Votre livre blanc vous attends dans vos mails !'}
          </span>
        </div>
      )}
    </section>
  );
};

export default LeadMagnetBlock;
