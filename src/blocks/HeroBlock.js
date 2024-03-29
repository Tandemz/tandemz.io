import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import { safePrefix, markdownify, Link, sendEvent } from '../utils';

export default class HeroBlock extends React.Component {
  render() {
    const bg = _.get(this.props, 'section.background');

    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={classnames('block hero-block outer', {
          'bg-white': bg === 'white',
          'bg-gray': bg === 'gray',
          'bg-orange': bg === 'orange',
          'bg-blue': bg === 'blue',
          'bg-img': !!_.get(this.props, 'section.embed_youtube_video_id'),
        })}
      >
        <div className="inner">
          <div className="grid">
            <div className="cell block-content">
              <h1 className="block-title">
                {markdownify(_.get(this.props, 'section.title'))}
              </h1>
              <div className="block-copy">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') && (
                <p className="block-buttons">
                  {_.map(
                    _.get(this.props, 'section.actions'),
                    (action, action_idx) => (
                      <Link
                        key={action_idx}
                        to={safePrefix(_.get(action, 'url'))}
                        target={_.get(action, 'target')}
                        className={
                          'button large white ' +
                          _.get(action, 'button_priority')
                        }
                        title={_.get(action, 'title')}
                        onClick={() =>
                          sendEvent('click', 'CTA', _.get(action, 'label'))
                        }
                      >
                        {_.get(action, 'label')}
                      </Link>
                    ),
                  )}
                </p>
              )}
            </div>
            {_.get(this.props, 'section.image') && (
              <div className="cell hero-preview">
                <img
                  src={safePrefix(_.get(this.props, 'section.image'))}
                  alt={_.get(this.props, 'section.image_alt')}
                />
              </div>
            )}
            {_.get(this.props, 'section.embed_youtube_video_id') && (
              <div className="cell hero-preview video-wrapper">
                <div className="iframe-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${_.get(
                      this.props,
                      'section.embed_youtube_video_id',
                    )}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
