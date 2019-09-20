import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, safePrefix} from '../utils';

export default class StudiesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block studies-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="block-header inner-small">
                <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                {_.get(this.props, 'section.subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.studies') && 
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(this.props, 'section.studies'), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell study">
                    <div className="study-inside">
                      <div className="study-title">
                        <p>{_.get(review, 'title')}</p>
                      </div>
                      <p className="study-text">{htmlToReact(_.get(review, 'content'))}</p>
                      <div class="menu-button">
                        <a href={_.get(review, 'url')} className="button">Je participe</a>
                      </div>
                    </div>
                  </blockquote>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}
