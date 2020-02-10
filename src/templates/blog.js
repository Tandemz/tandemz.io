import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import * as blocks from '../blocks';

export default class Blog extends React.Component {
  render() {
    const title = _.get(this.props, 'pageContext.frontmatter.title');
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            {!!title && <h1 className="post-title">{title}</h1>}
            {_.map(
              _.get(this.props, 'pageContext.frontmatter.sections'),
              (section, section_idx) => {
                let GetSectionComponent = blocks[_.get(section, 'component')];
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
