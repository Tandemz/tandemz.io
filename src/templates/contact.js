import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import { htmlToReact } from '../utils';

export default class Contact extends React.Component {
  render() {
    handleChange(e) {

    }


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
                  action="/contact-success"
                >
                  <p className="screen-reader-text">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <p className="form-row">
                    <label htmlFor="surname" className="form-label">
                      Last Name *
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
                      First Name *
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
                      Company *
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
                      Email *
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
                    <label htmlFor="" className="form-label">
                      What is the object of your query?
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      className="form-input"
                      onChange={handleChange}
                    >
                      <option value="Default">
                        ---- Choose an option ----
                      </option>
                      <option value="PaysAsYouGo">
                        I want to learn more about Tandemz' pay as you go
                        recruitment services
                      </option>
                      <option value="Credits">
                        I want to disccus Tandemz' prepaid credits offers
                      </option>
                      <option value="Participant">
                        I want to become a tester
                      </option>
                      <option value="WhiteBook">
                        I want to get the white book
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </p>
                  <p className="form-row">
                    <label htmlFor="message" className="form-label">
                      Leave us a message
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
                      Send contact request
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
