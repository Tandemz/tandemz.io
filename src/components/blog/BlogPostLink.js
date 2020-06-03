import * as React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { Link, safePrefix } from '../../utils';

export default class BlogPostLink extends React.PureComponent {
  render() {
    const { post, post_idx } = this.props;
    return (
      <article key={post_idx} className="post post-card">
        <div className="post-card-inside no-translate">
          {_.get(post, 'frontmatter.thumb_img_path') && (
            <Link
              className="post-card-thumbnail"
              to={safePrefix(_.get(post, 'url'))}
              title={_.get(post, 'frontmatter.full_title')}
            >
              <img
                className="thumbnail"
                src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}
                alt={_.get(post, 'frontmatter.title')}
              />
            </Link>
          )}
          <div className="post-card-content">
            <header className="post-header">
              <h3 className="post-title">
                <Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">
                  {_.get(post, 'frontmatter.full_title')}
                </Link>
              </h3>
            </header>
            <div className="post-excerpt">
              <p>{_.get(post, 'frontmatter.excerpt')}</p>
            </div>
            <footer className="post-meta">
              <time
                className="published"
                dateTime={moment(_.get(post, 'frontmatter.date')).format()}
              >
                {moment(_.get(post, 'frontmatter.date')).format('LL')}
              </time>
            </footer>
          </div>
        </div>
      </article>
    );
  }
}
