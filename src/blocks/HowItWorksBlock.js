import React from 'react';
import _ from 'lodash';

import { safePrefix } from '../utils';

export default class HowItWorksBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={'how-it-works block bg-' + _.get(this.props, 'section.bg')}
      >
        <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
        {_.get(this.props, 'section.steps') && (
          <div className="steps-block">
            {_.map(_.get(this.props, 'section.steps'), (block, block_idx) => (
              <div key={block_idx} className="stepblock">
                <div>
                  {_.get(block, 'illustration') && (
                    <img
                      className="stepblock-icon"
                      src={safePrefix(_.get(block, 'illustration'))}
                      alt={_.get(block, 'illustation_alt')}
                      title={_.get(block, 'illustation_alt')}
                    />
                  )}
                  <p className="stepblock-caption">{_.get(block, 'caption')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}
