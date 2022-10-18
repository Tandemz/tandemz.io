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
                  name="leadCompletion"
                  method="POST"
                  netlifyHoneypot="bot-field"
                  data-netlify="true"
                  id="lead-completion"
                  className="contact-form"
                  action={_.get(this.props, 'pageContext.frontmatter.dest', '')}
                >
                  <p className="screen-reader-text">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <p className="form-row">
                    <label htmlFor="name" className="form-label">
                      {_.get(this.props, 'pageContext.frontmatter.firstName')}*
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
                    <label htmlFor="email" className="form-label">
                      {_.get(this.props, 'pageContext.frontmatter.email')}*
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
                    <label htmlFor="phoneNumber" className="form-label">
                      {_.get(this.props, 'pageContext.frontmatter.jobTitle')}*
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="" className="form-label">
                      {_.get(
                        this.props,
                        'pageContext.frontmatter.target.label',
                      )}
                      *
                    </label>
                    <select
                      id="target"
                      name="target"
                      className="form-input"
                      required
                    >
                      <option value="" selected></option>
                      <option value="B2B">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.target.b2b',
                        )}
                      </option>
                      <option value="B2C">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.target.b2c',
                        )}
                      </option>
                      <option value="Both">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.target.both',
                        )}
                      </option>
                      <option value="Never">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.target.never',
                        )}
                      </option>
                    </select>
                  </p>
                  <p className="form-row">
                    <label className="form-label">
                      {_.get(
                        this.props,
                        'pageContext.frontmatter.companyType.label',
                      )}
                    </label>
                    <select
                      id="companyType"
                      name="companyType"
                      className="form-input"
                      required
                    >
                      <option value="" selected></option>
                      <option value="freelance">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.companyType.freelance',
                        )}
                      </option>
                      <option value="agency">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.companyType.agency',
                        )}
                      </option>
                      <option value="startup">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.companyType.startup',
                        )}
                      </option>
                      <option value="scaleup">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.companyType.scaleup',
                        )}
                      </option>
                      <option value="publicAgency">
                        {_.get(
                          this.props,
                          'pageContext.frontmatter.companyType.publicAgency',
                        )}
                      </option>
                      <option value="none">None</option>
                    </select>
                  </p>
                  <input
                    type="hidden"
                    name="form-name"
                    value="leadCompletion"
                  />
                  <p className="form-row form-submit">
                    <button type="submit" className="button">
                      {_.get(this.props, 'pageContext.frontmatter.submit')}
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
