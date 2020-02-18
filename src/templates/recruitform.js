import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import { htmlToReact } from '../utils';

export default class Recruitform extends React.Component {
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
                  name="recruitForm"
                  method="POST"
                  netlifyHoneypot="bot-field"
                  data-netlify="true"
                  id="recruit-form"
                  className="recruit-form"
                >
                  <p className="screen-reader-text">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <p className="form-row">
                    <label htmlFor="surname" className="form-label">
                      Nom *
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
                      Prénom *
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
                      Entreprise *
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
                      Adresse email *
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
                    <label htmlFor="phone" className="form-label">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="target-number" className="form-label">
                      Nombre de participants recherchés *
                    </label>
                    <input
                      type="text"
                      id="target-number"
                      name="target-number"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="dates" className="form-label">
                      Dates de votre étude
                    </label>
                    <input type="text" id="dates" name="dates" />
                  </p>
                  <p className="form-row">
                    <label htmlFor="location" className="form-label">
                      Lieu de votre étude
                    </label>
                    <input type="text" id="location" name="location" />
                  </p>
                  <p className="form-row">
                    <label htmlFor="criteria" className="form-label">
                      Décrivez votre ou vos cible(s) de participants *
                    </label>
                    <textarea
                      id="criteria"
                      name="textarea"
                      rows="8"
                      className="form-input"
                      required
                    />
                  </p>
                  <p className="form-row">
                    <label htmlFor="message" className="form-label">
                      Message supplémentaire
                    </label>
                    <textarea
                      id="message"
                      name="textarea"
                      rows="5"
                      className="form-input"
                    />
                  </p>
                  <input type="hidden" name="form-name" value="recruitForm" />
                  <p className="form-row form-submit">
                    <button type="submit" className="button">
                      Envoyer ma demande de recrutement
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
