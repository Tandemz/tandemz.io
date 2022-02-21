import React from 'react';
import _ from 'lodash';

const LeadMagnetBlock = (props) => {
  const section = _.get(props, 'section');
  const title = _.get(section, 'title');
  const inputPlaceholder = _.get(section, 'inputPlaceholder');
  const buttonLabel = _.get(section, 'buttonLabel');
  const formName = _.get(section, 'formName');
  const displayFormInNetlify = _.get(section, 'displayFormInNetlify');
  const section_id = _.get(section, 'section_id');

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
    </section>
  );
};

export default LeadMagnetBlock;
