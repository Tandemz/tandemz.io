import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import { Helmet } from 'react-helmet';

import { safePrefix, htmlToReact, loadDataRef } from '../../utils';

export default class PostAuthorBlock extends React.Component {
  render() {
    const author = loadDataRef(
      this.props.pageContext,
      _.get(this.props, 'pageContext.frontmatter.author'),
    );
    return (
      <React.Fragment>
        <img className="post-avatar" src={author.avatar} alt={author.name} />
        <div>
          <div className="post-author">{author.name}</div>
          <time
            className="published"
            dateTime={moment(
              _.get(this.props, 'pageContext.frontmatter.date'),
            ).strftime('%Y-%m-%d %H:%M')}
          >
            {moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime(
              '%A, %B %e, %Y',
            )}
          </time>
        </div>
      </React.Fragment>
    );
  }
}
