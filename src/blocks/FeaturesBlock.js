import React from 'react';
import _ from 'lodash';

import { safePrefix, markdownify } from '../utils';
import { CtaButtons } from '../components';

export default class FeaturesBlock extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block features-block bg-' +
          _.get(this.props, 'section.bg') +
          ' outer'
        }
      >
        {_.get(this.props, 'section.featureslist') && (
          <div className="inner">
            {_.map(
              _.get(this.props, 'section.featureslist'),
              (feature, feature_idx) => (
                <div key={feature_idx} className="block-item">
                  <div className="grid">
                    {_.get(feature, 'image') && (
                      <div className="cell block-preview">
                        <img
                          src={safePrefix(_.get(feature, 'image'))}
                          alt={_.get(feature, 'image_alt')}
                          title={_.get(feature, 'image_alt')}
                        />
                      </div>
                    )}
                    <div className="cell block-content">
                      {_.get(feature, 'coming_soon') && (
                        <div className="feature-flag feature-flag--coming-soon">
                          coming soon
                        </div>
                      )}
                      {_.get(feature, 'is_beta') && (
                        <div className="feature-flag feature-flag--beta">
                          Beta
                        </div>
                      )}
                      <h2 className="block-title">{_.get(feature, 'title')}</h2>
                      <div className="block-copy">
                        {markdownify(_.get(feature, 'content'))}
                      </div>
                      {_.get(feature, 'actions') && (
                        <CtaButtons
                          {...this.props}
                          actions={_.get(feature, 'actions')}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </section>
    );
  }
}
