import React from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';

import components, { Layout } from '../components/index';
import { safePrefix } from '../utils';

const SectionList = ({ sections, ...props }) => {
  return (
    <React.Fragment>
      {_.map(sections, (section, section_idx) => {
        let GetSectionComponent = components[_.get(section, 'component', '')];
        if (!GetSectionComponent) {
          return null;
        }
        return (
          <GetSectionComponent
            key={section_idx}
            {...props}
            section={section}
            site={props.pageContext.site}
          />
        );
      })}
    </React.Fragment>
  );
};

export default class Post extends React.Component {
  render() {
    const template = _.get(
      this.props,
      'pageContext.site.data.post_template',
      {},
    );
    const image =
      _.get(this.props, 'pageContext.frontmatter.social_image') ||
      _.get(this.props, 'pageContext.frontmatter.content_img_path');

    const { before, header, content, after, footer } = template;

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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
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
          <meta property="og:image" content={image} />
        </Helmet>

        <div className="outer bg-white">
          <div className="inner-medium">
            <SectionList sections={before} {...this.props} />
            <article>
              <header className="post-header">
                <SectionList sections={header} {...this.props} />
              </header>
              <SectionList sections={content} {...this.props} />
              <footer className="post-meta">
                <SectionList sections={footer} {...this.props} />
              </footer>
            </article>
            <SectionList sections={after} {...this.props} />
          </div>
        </div>
      </Layout>
    );
  }
}
