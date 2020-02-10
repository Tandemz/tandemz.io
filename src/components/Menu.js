import * as React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import { Link, safePrefix, sendEvent } from '../utils';

class Menu extends React.Component {
  render() {
    const { menu, url } = this.props;

    if (!menu || !url) {
      return null;
    }
    const actions =
      this.props.actions &&
      this.props.actions.filter(item => !!item.url && !!item.label);

    return (
      <React.Fragment>
        <nav
          id="main-navigation"
          className="site-navigation"
          aria-label="Main Navigation"
        >
          <div className="site-nav-inside">
            <button id="menu-close" className="menu-toggle">
              <span className="screen-reader-text">Open Menu</span>
              <span className="icon-close" aria-hidden="true" />
            </button>
            <ul className="menu">
              {menu &&
                _.map(menu, item => (
                  <li
                    key={item.title}
                    className={classnames('menu-item', {
                      'current-menu-item':
                        url === item.url ||
                        item.items.some(subItem => url === subItem.url),
                    })}
                  >
                    <Link to={safePrefix(item.url)}>{item.title}</Link>
                    {item.items && !!item.items.length && (
                      <ul className="sub-menu">
                        {item.items.map(subItem => (
                          <li
                            key={item.title}
                            className={classnames('sub-menu-item', {
                              'current-sub-menu-item': url === subItem.url,
                            })}
                          >
                            <Link to={safePrefix(subItem.url)}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              {actions &&
                _.map(actions, (action, action_idx) => (
                  <li key={action_idx} className="menu-item menu-button">
                    <Link
                      to={safePrefix(action.url)}
                      className="button"
                      onClick={() => sendEvent('click', 'request demo', url)}
                    >
                      {action.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
        <button id="menu-open" className="menu-toggle">
          <span className="screen-reader-text">Close Menu</span>
          <span className="icon-menu" aria-hidden="true" />
        </button>
      </React.Fragment>
    );
  }
}
export default Menu;
