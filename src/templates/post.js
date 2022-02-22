import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Helmet } from 'react-helmet';

import { Layout } from '../components';
import * as blocks from '../blocks';
import { safePrefix, loadDataRef } from '../utils';
import { generatePostSchemaOrg } from '../utils/generatePostSchemaOrg';

const SectionList = ({ sections, ...props }) => {
  return (
    <React.Fragment>
      {_.map(sections, (section, section_idx) => {
        let GetSectionComponent = blocks[_.get(section, 'component', '')];
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
    const meta = _.get(this.props, 'pageContext.frontmatter') || {};
    const template = _.get(
      this.props,
      'pageContext.site.data.post_template',
      {},
    );

    const image = safePrefix(
      meta.ogimage || meta.thumb_img_path || meta.content_img_path,
      _.get(this.props, 'pageContext.site.siteMetadata.siteUrl'),
    );
    const author = loadDataRef(this.props.pageContext, meta.author);

    const { before, header, content, after, footer } = template;
    const beforeFooterSections = _.get(
      this.props,
      'pageContext.frontmatter.beforeFooterSections',
    );
    return (
      <Layout {...this.props}>
        <Helmet>
          <meta property="og:image" content={image} name="image" />
          <meta name="twitter:image" content={image} />

          <meta name="author" content={author.name} />
          <meta name="article:author" content={author.name} />

          <meta
            name="article-published_time"
            property="article:published_time"
            content={moment(meta.date).format()}
          />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={moment(meta.date).format()}
          />
          <script
            className="structured-data-list"
            type="application/ld+json"
            key="article"
          >
            {generatePostSchemaOrg(this.props.pageContext, { image, author })}
          </script>
        </Helmet>

        <div className="outer bg-white">
          <div className="inner-medium">
            <SectionList sections={before} {...this.props} />
            <article className="no-translate">
              <header className="post-header">
                <SectionList sections={header} {...this.props} />
              </header>
              <SectionList sections={content} {...this.props} />
            </article>
            <SectionList sections={beforeFooterSections} {...this.props} />
            <footer className="post-meta">
              <SectionList sections={footer} {...this.props} />
            </footer>
            <SectionList sections={after} {...this.props} />
          </div>
        </div>
      </Layout>
    );
  }
}
