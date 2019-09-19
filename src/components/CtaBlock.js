import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, safePrefix} from '../utils';

export default class CtaBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block cta-block bg-accent outer">
              <div className="inner-medium">
                <div>
                  <div className="block-content">
                    <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') && 
                    <p className="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                      className="contact-form">
                      <p className="screen-reader-text">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Nom</label>
                        <input type="text" name="surname" className="form-input"/>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Prénom</label>
                        <input type="text" name="name" className="form-input"/>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email" className="form-input"/>
                      </p>
                      <input type="hidden" name="form-name" value="contactForm" />
                      <p className="form-row form-submit">
                        <button type="submit" className="button white large">Participer</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
