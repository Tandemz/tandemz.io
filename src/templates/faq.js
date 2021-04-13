import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import * as blocks from '../blocks';

export default class Faq extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="faq-page">
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
      </Layout>
    );
  }
}
