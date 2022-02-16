import React from 'react';
import _ from 'lodash';

const OfferSectionsBlock = (props) => {
  const data = _.get(props, 'tabData');
  if (!data) {
    return null;
  }
  const offerSections = _.get(data, 'offerSections');

  return (
    <section id={_.get(props, 'section.section_id')} className={'bg-white'}>
      <h3 className="offer-section-title">{data.title}</h3>
      <div className="offer-section-content">
        {_.map(offerSections, (offerSectionData, section_idx) => {
          return (
            <div key={`offer-section-${section_idx}`}>
              <OfferSectionBlock offerSectionData={offerSectionData} />
              <div
                className="offer-section-vertical-separator"
                key={`offer-section-separator-${section_idx}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default OfferSectionsBlock;

const colorMatcher = {
  Blue: 'blueTitle',
  Green: 'greenTitle',
  Purple: 'purpleTitle',
  Red: 'redTitle',
  Black: 'blackTitle',
};

const OfferSectionBlock = ({ offerSectionData }) => {
  const { title, color, price, offerdescription, offerdetails } =
    offerSectionData;

  const currentColor = colorMatcher[color];
  return (
    <div className="offer-column">
      <div className="offer-column-header">
        <h4 className={`offer-title ${currentColor}`}>{title}</h4>
      </div>
      <div className="offer-column-body"></div>
    </div>
  );
};
