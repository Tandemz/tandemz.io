import React from 'react';
import _ from 'lodash';

export default class PostTitleBlock extends React.Component {
  render() {
    return (
      <h1 className="post-title">
        {_.get(this.props, 'pageContext.frontmatter.full_title')}
      </h1>
    );
  }
}
