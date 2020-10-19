import React from 'react';
import _ from 'lodash';

export default class CardsGridBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className="cards-grid block cell-block"
      >
        <div className="block-header">
          <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
        </div>
        {_.get(this.props, 'section.cards') && (
          <div className="cards-block inner">
            {_.map(_.get(this.props, 'section.steps'), (block, block_idx) => (
              <div key={block_idx} className="card-block">
                <p className="card-block-title">{_.get(block, 'title')}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}
