import React from 'react';
import _ from 'lodash';

import { Layout } from '../components';
import * as blocks from '../blocks';

export default class Pricing extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="pricing-page">
          {_.map(
            _.get(this.props, 'pageContext.frontmatter.sections'),
            (section, section_idx) => {
              const GetSectionComponent = blocks[_.get(section, 'component')];
              if (!GetSectionComponent) {
                return null;
              }
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
