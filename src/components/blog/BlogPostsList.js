import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import BlogPostLink from './BlogPostLink';
import { htmlToReact, getPages, Link, safePrefix } from '../../utils';

export default class BlogPostsList extends React.Component {
  render() {
    const { posts } = this.props;

    const title = _.get(this.props, 'section.title');
    const subtitle = _.get(this.props, 'section.subtitle');

    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block posts-block bg-' + _.get(this.props, 'section.bg') + ' outer'
        }
      >
        {!!title && (
          <div className="block-header inner-small">
            <h2 className="block-title">{title}</h2>
            {subtitle && (
              <p className="block-subtitle">{htmlToReact(subtitle)}</p>
            )}
          </div>
        )}
        <div className="inner">
          <div className="post-feed">
            {_.map(posts, (post, post_idx) => (
              <BlogPostLink post={post} post_idx={post_idx} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
