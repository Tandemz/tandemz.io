import React from 'react';
import _ from 'lodash';

import { htmlToReact, safePrefix } from '../utils';

export default class ValueBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block cell-block value-block bg-' +
          _.get(this.props, 'section.bg') +
          ' outer-medium'
        }
      >
        {_.get(this.props, 'section.title') && (
          <div className="block-header inner-small">
            <h2 className="block-title">
              {_.get(this.props, 'section.title')}
            </h2>
            {_.get(this.props, 'section.subtitle') && (
              <p className="block-subtitle">
                {htmlToReact(_.get(this.props, 'section.subtitle'))}
              </p>
            )}
          </div>
        )}
        {_.get(this.props, 'section.valueblocks') && (
          <div className="inner">
            <div className="grid">
              {_.map(
                _.get(this.props, 'section.valueblocks'),
                (block, block_idx) => (
                  <div key={block_idx} className="cell valueblock">
                    <div>
                      {_.get(block, 'icon') && (
                        <img
                          className="valueblock-icon"
                          src={safePrefix(_.get(block, 'icon'))}
                          alt="Icon"
                        />
                      )}
                      <h3 className="valueblock-title">
                        {_.get(block, 'title')}
                      </h3>
                      <p>{htmlToReact(_.get(block, 'content'))}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </section>
    );
  }
}
