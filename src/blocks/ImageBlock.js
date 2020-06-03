import React from 'react';
import _ from 'lodash';

import { safePrefix } from '../utils';

export default class ImageBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block image-block bg-' + _.get(this.props, 'section.bg') + ' outer'
        }
      >
        <div className="inner">
          <div>
            {_.get(this.props, 'section.image') && (
              <div className="block-overlap">
                <img
                  src={safePrefix(_.get(this.props, 'section.image'))}
                  alt={_.get(this.props, 'section.image_alt')}
                  title={_.get(this.props, 'section.image_alt')}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
