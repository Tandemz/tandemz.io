import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import { safePrefix, markdownify, Link } from '../utils';

export default class HeroBlock extends React.Component {
  render() {
    console.log('foo');
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={classnames(
          'block hero-block bg-accent outer',
          _.get(this.props, 'section.className'),
        )}
      >
        <div className="inner">
          <div className="grid">
            {_.get(this.props, 'section.image') && (
              <div className="cell hero-preview">
                <img
                  src={safePrefix(_.get(this.props, 'section.image'))}
                  alt={_.get(this.props, 'section.title')}
                />
              </div>
            )}
            <div className="cell block-content">
              <h1 className="block-title">
                {markdownify(_.get(this.props, 'section.title'))}
              </h1>
              <div className="block-copy">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') && (
                <p className="block-buttons">
                  {_.map(
                    _.get(this.props, 'section.actions'),
                    (action, action_idx) => (
                      <Link
                        key={action_idx}
                        to={safePrefix(_.get(action, 'url'))}
                        className="button white large"
                      >
                        {_.get(action, 'label')}
                      </Link>
                    ),
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
