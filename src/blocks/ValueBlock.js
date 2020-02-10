import React from 'react';
import _ from 'lodash';

export default class ValueBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block value-block bg-' + _.get(this.props, 'section.bg') + ' outer'
        }
      >
        <div className="inner">
          <div className="block-item">
            <div className="top-grid">
              <div className="cell block-content">
                <h3 className="block-title underline">
                  {_.get(this.props, 'section.value_title_1')}
                </h3>
                <div className="block-copy">
                  {_.get(this.props, 'section.value_content_1')}
                </div>
              </div>
              <div className="cell block-content">
                <h3 className="block-title underline">
                  {_.get(this.props, 'section.value_title_2')}
                </h3>
                <div className="block-copy">
                  {_.get(this.props, 'section.value_content_2')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
