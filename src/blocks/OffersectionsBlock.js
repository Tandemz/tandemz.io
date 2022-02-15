import React from 'react';
import _ from 'lodash';

const OffersectionsBlock = (props) => {
  return (
    <section
      id={_.get(props, 'section.section_id')}
      className={'block tab-panel-section bg-white outer'}
    >
      {'OffersectionsBlock'}
    </section>
  );
};
export default OffersectionsBlock;
