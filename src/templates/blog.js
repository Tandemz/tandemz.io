import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, { Layout } from '../components/index';
import { getPages, Link, safePrefix } from '../utils';

export default class Blog extends React.Component {
  render() {
    let display_posts = _.orderBy(
      getPages(this.props.pageContext.pages, '/posts'),
      'frontmatter.date',
      'desc',
    );

    const title = _.get(this.props, 'pageContext.frontmatter.title');
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            {!!title && <h1 className="post-title">{title}</h1>}
            {_.map(
              _.get(this.props, 'pageContext.frontmatter.sections'),
              (section, section_idx) => {
                let GetSectionComponent =
                  components[_.get(section, 'component')];
                return (
                  <GetSectionComponent
                    key={section_idx}
                    {...this.props}
                    section={section}
                    site={this.props.pageContext.site}
                  />
                );
              },
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
