import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import { Helmet } from 'react-helmet';

import { Layout } from '../components/index';
import { safePrefix, htmlToReact, loadDataRef } from '../utils';

export default class Post extends React.Component {
  render() {
    const author = loadDataRef(
      this.props.pageContext,
      _.get(this.props, 'pageContext.frontmatter.author'),
    );
    return (
      <Layout {...this.props}>
        <Helmet>
          <meta
            name="description"
            content={_.get(this.props, 'pageContext.frontmatter.excerpt')}
          />
          <meta
            name="keywords"
            content={_.get(this.props, 'pageContext.frontmatter.keywords')}
          />
          <meta
            property="og:title"
            content={_.get(this.props, 'pageContext.frontmatter.title')}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={safePrefix(
              _.get(this.props, 'pageContext.site.siteMetadata.siteUrl') +
                _.get(this.props, 'pageContext.url'),
            )}
          />
          <meta
            property="og:description"
            content={_.get(this.props, 'pageContext.frontmatter.excerpt')}
          />
          <meta
            property="og:image"
            content={_.get(
              this.props,
              'pageContext.frontmatter.content_img_path',
            )}
          />
        </Helmet>

        <div className="outer bg-white">
          <div className="inner-medium">
            <article className="post post-full">
              <header className="post-header">
                <h1 className="post-title">
                  {_.get(this.props, 'pageContext.frontmatter.title')}
                </h1>
              </header>
              {_.get(
                this.props,
                'pageContext.frontmatter.content_img_path',
              ) && (
                <div className="post-thumbnail">
                  <img
                    src={safePrefix(
                      _.get(
                        this.props,
                        'pageContext.frontmatter.content_img_path',
                      ),
                    )}
                    alt={_.get(this.props, 'pageContext.frontmatter.title')}
                  />
                </div>
              )}
              {_.get(this.props, 'pageContext.frontmatter.subtitle') && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, 'pageContext.frontmatter.subtitle'),
                  )}
                </div>
              )}
              <div className="post-content">
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
              </div>
              <footer className="post-meta separated">
                <img
                  className="post-avatar"
                  src={author.avatar}
                  alt={author.name}
                />
                <div>
                  <div className="post-author">{author.name}</div>
                  <time
                    className="published"
                    dateTime={moment(
                      _.get(this.props, 'pageContext.frontmatter.date'),
                    ).strftime('%Y-%m-%d %H:%M')}
                  >
                    {moment(
                      _.get(this.props, 'pageContext.frontmatter.date'),
                    ).strftime('%A, %B %e, %Y')}
                  </time>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
