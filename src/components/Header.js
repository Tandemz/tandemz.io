import React from 'react';
import _ from 'lodash';

import { Link, safePrefix } from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header outer">
        <div className="inner">
          <div className="site-header-inside">
            <div className="site-branding">
              {_.get(
                this.props,
                'pageContext.site.siteMetadata.header.logo_img',
              ) && (
                <p className="site-logo">
                  <Link to={safePrefix('/')}>
                    <img
                      src={safePrefix(
                        _.get(
                          this.props,
                          'pageContext.site.siteMetadata.header.logo_img',
                        ),
                      )}
                      alt="Logo"
                    />
                  </Link>
                </p>
              )}
            </div>
            {_.get(this.props, 'pageContext.menus.main') &&
              _.get(
                this.props,
                'pageContext.site.siteMetadata.header.has_nav',
              ) && (
                <Menu
                  menu={_.get(this.props, 'pageContext.menus.main')}
                  actions={_.get(
                    this.props,
                    'pageContext.site.siteMetadata.header.menu.actions',
                  )}
                  url={_.get(this.props, 'pageContext.url')}
                />
              )}
          </div>
        </div>
      </header>
    );
  }
}
