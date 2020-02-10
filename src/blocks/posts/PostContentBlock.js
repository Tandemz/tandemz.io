import React from 'react';
import _ from 'lodash';

import { safePrefix, htmlToReact } from '../../utils';

export default class PostContentBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        {_.get(this.props, 'pageContext.frontmatter.content_img_path') && (
          <div className="post-thumbnail">
            <img
              src={safePrefix(
                _.get(this.props, 'pageContext.frontmatter.content_img_path'),
              )}
              alt={_.get(this.props, 'pageContext.frontmatter.title')}
            />
          </div>
        )}
        {_.get(this.props, 'pageContext.frontmatter.subtitle') && (
          <div className="post-subtitle">
            {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
          </div>
        )}
        <div className="post-content">
          {htmlToReact(_.get(this.props, 'pageContext.html'))}
        </div>
      </React.Fragment>
    );
  }
}
