import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import { htmlToReact } from '../utils';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner-medium">
            <article className="post page post-full">
              <header className="post-header">
                <h1 className="post-title">
                  {_.get(this.props, 'pageContext.frontmatter.title')}
                </h1>
              </header>
              {_.get(this.props, 'pageContext.frontmatter.subtitle') && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, 'pageContext.frontmatter.subtitle'),
                  )}
                </div>
              )}
              <div className="post-content">
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
                <form
                  name="contactForm"
                  method="POST"
                  netlifyHoneypot="bot-field"
                  data-netlify="true"
                  id="contact-form"
                  className="contact-form"
                >
                  <p className="screen-reader-text">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <p className="form-row">
                    <label htmlFor="surname" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="name" className="form-label">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="company" className="form-label">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="email" className="form-label">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="message" className="form-label">
                      Laissez-nous un message
                    </label>
                    <textarea
                      id="message"
                      name="textarea"
                      rows="5"
                      className="form-input"
                    />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row form-submit">
                    <button type="submit" className="button">
                      Envoyer
                    </button>
                  </p>
                </form>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
