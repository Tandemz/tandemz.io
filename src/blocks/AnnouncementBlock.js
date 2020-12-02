import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';

export default class AnnouncementBlock extends React.Component {
  render() {
    return (
      <section className="block banner">
        <div className="inner-large">
          <div className="banner-title">
            {_.get(this.props, 'section.title')}
          </div>
          {_.get(this.props, 'section.description') && (
            <div className="banner-description">
              {htmlToReact(_.get(this.props, 'section.description'))}
            </div>
          )}
        </div>
      </section>
    );
  }
}
