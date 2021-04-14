import React from 'react';
import _ from 'lodash';

import { Link, safePrefix, getLocale } from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
  render() {
    const locale = getLocale(this.props.pageContext);
    return (
      <div className="site-header-container">
        <header id="masthead" className="site-header">
          <div className="site-branding">
            {_.get(
              this.props,
              'pageContext.site.siteMetadata.header.logo_img',
            ) && (
              <p className="site-logo">
                <Link to={safePrefix('/')} title="Retour à l'accueil">
                  <img
                    src={safePrefix(
                      _.get(
                        this.props,
                        'pageContext.site.siteMetadata.header.logo_img',
                      ),
                    )}
                    alt="Logo de Tandemz"
                  />
                </Link>
              </p>
            )}
          </div>
          {_.get(
            this.props,
            'pageContext.site.siteMetadata.header.has_nav',
          ) && (
            <Menu
              menu={_.get(this.props, `pageContext.menus.main_${locale}`)}
              actions={_.get(
                this.props,
                'pageContext.site.siteMetadata.header.menu.actions',
              )}
              url={_.get(this.props, 'pageContext.url')}
            />
          )}
        </header>
      </div>
    );
  }
}
