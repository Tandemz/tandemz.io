import * as React from 'react';
import { Link, safePrefix, sendEvent } from '../utils';
import _ from 'lodash';

class Menu extends React.Component {
  render() {
    const { url } = this.props;

    if (!this.props.menu || !url) {
      return null;
    }
    const menu = this.props.menu.filter(item => !!item.url && !!item.title);
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
                _.map(menu, (item, item_idx) => (
                  <li
                    key={item_idx}
                    className={
                      'menu-item ' +
                      (url === item.url ? ' current-menu-item' : '')
                    }
                  >
                    <Link to={safePrefix(item.url)}>{item.title}</Link>
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
