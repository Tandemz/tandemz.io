import React from 'react';
import _ from 'lodash';

import { safePrefix } from '../utils';

export default class CardsGridBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className="cards-grid block cell-block bg-white gutter outer"
      >
        <div className="inner">
          <div className="block-header">
            <h2 className="block-title">
              {_.get(this.props, 'section.title')}
            </h2>
          </div>
          {_.get(this.props, 'section.cards') && (
            <div className="cards-block grid">
              {_.map(_.get(this.props, 'section.cards'), (block, block_idx) => (
                <div key={block_idx} className="card-block cell">
                  <img
                    alt={_.get(block, 'icon_alt')}
                    title={_.get(block, 'icon_title')}
                    src={safePrefix(_.get(block, 'icon'))}
                    className="cards-block-img"
                  />
                  <h3 className="card-block-title">{_.get(block, 'title')}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}
