import React from 'react';
import _ from 'lodash';

import { getPages } from '../utils';
import BlogPostsList from './blog/BlogPostsList';

export default class RecentsPostsBlock extends React.Component {
  render() {
    let display_posts = _.orderBy(
      getPages(this.props.pageContext.pages, '/posts'),
      'frontmatter.date',
      'desc',
    );
    let recent_posts = display_posts.slice(0, 3);
    return <BlogPostsList posts={recent_posts} section={this.props.section} />;
  }
}
