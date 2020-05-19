import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { loadDataRef } from '../../utils';
import { SocialShareButtonsBlock } from '..';

export default class PostAuthorBlock extends React.Component {
  render() {
    const author = loadDataRef(
      this.props.pageContext,
      _.get(this.props, 'pageContext.frontmatter.author'),
    );
    const withSocials = !!_.get(this.props, 'section.with_socials');

    return (
      <div className="author-block">
        <img className="post-avatar" src={author.avatar} alt={author.name} />
        <div>
          <div className="post-author">{author.name}</div>
          <time
            className="published"
            dateTime={moment(
              _.get(this.props, 'pageContext.frontmatter.date'),
            ).format()}
          >
            {moment(_.get(this.props, 'pageContext.frontmatter.date')).format(
              'LL',
            )}
          </time>
        </div>
        <div className="spacer" />
        {withSocials && <SocialShareButtonsBlock {...this.props} />}
      </div>
    );
  }
}
