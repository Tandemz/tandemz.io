import React from 'react';
import _ from 'lodash';
import { getLocale } from '../utils';

const OfferSectionsBlock = (props) => {
  const data = _.get(props, 'tabData');
  if (!data) {
    return null;
  }
  const offerSections = _.get(data, 'offerSections');
  const locale = getLocale(props.pageContext);

  return (
    <section id={_.get(props, 'section.section_id')} className={'bg-white'}>
      <h3 className="offer-section-title">{data.title}</h3>
      <div className="offer-section-content">
        {_.map(offerSections, (offerSectionData, section_idx) => {
          return (
            <div
              key={`offer-section-${section_idx}`}
              className={
                section_idx < offerSections.length - 1
                  ? 'offer-column-right-border'
                  : ''
              }
            >
              <OfferSectionBlock
                offerSectionData={offerSectionData}
                locale={locale}
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

const OfferSectionBlock = ({ offerSectionData, locale }) => {
  const { title, color, price, offerdescription, offerdetails } =
    offerSectionData;

  const currentColor = colorMatcher[color];
  const offerPriceLegend =
    locale === 'fr' ? 'par participant' : 'per participant';
  return (
    <div className="offer-column">
      <div className="offer-column-header">
        <h4 className={`offer-title ${currentColor}`}>{title}</h4>
        <div className="offer-price-container">
          <span className="offer-price">{price}</span>
          <span className="offer-price-curency">€</span>
        </div>
        <span className="offer-price-legend">{offerPriceLegend}</span>
        <span className="offer-price-description">{offerdescription}</span>
      </div>
      <div className="offer-column-body"></div>
    </div>
  );
};
