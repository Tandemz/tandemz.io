import React from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import BlogPostLink from './BlogPostLink';
import { htmlToReact } from '../../utils';

export default class BlogPostsList extends React.Component {
  state = { currentPage: 0 };

  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  render() {
    const { posts } = this.props;

    const title = _.get(this.props, 'section.title');
    const subtitle = _.get(this.props, 'section.subtitle');

    const itemsPerPage = _.get(this.props, 'section.prePage', 9);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    const startItem = this.state.currentPage * itemsPerPage;
    const endItem = (this.state.currentPage + 1) * itemsPerPage;
    const postsList = posts.slice(startItem, endItem);
    console.log(startItem, endItem, postsList.length);

    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={
          'block posts-block bg-' + _.get(this.props, 'section.bg') + ' outer'
        }
      >
        {!!title && (
          <div className="block-header inner-small">
            <h2 className="block-title">{title}</h2>
            {subtitle && (
              <p className="block-subtitle">{htmlToReact(subtitle)}</p>
            )}
          </div>
        )}
        <div className="inner">
          <div className="post-feed">
            {_.map(postsList, (post, post_idx) => (
              <BlogPostLink post={post} post_idx={post_idx} />
            ))}
          </div>

          {pageCount > 1 && (
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              nextLabel="Suivant"
              previousLabel="Précédent"
              onPageChange={this.handlePageClick}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          )}
        </div>
      </section>
    );
  }
}
