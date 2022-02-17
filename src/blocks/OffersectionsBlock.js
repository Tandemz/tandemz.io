import React from 'react';
import _ from 'lodash';
import { getLocale } from '../utils';
import { LockIcon } from '../components/icons/LockIcon';
import { GiftIcon } from '../components/icons/GiftIcon';
import { CheckIcon } from '../components/icons/CheckIcon';

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
            <OfferSectionBlock
              key={`offer-section-${section_idx}`}
              offerSectionData={offerSectionData}
              locale={locale}
            />
          );
        })}
      </div>
    </section>
  );
};
export default OfferSectionsBlock;

const colorMatcher = {
  Blue: { className: 'blueTitle', iconColor: '#1493ff' },
  Green: { className: 'greenTitle', iconColor: '#0b8749' },
  Purple: { className: 'purpleTitle', iconColor: '#7525dc' },
  Red: { className: 'redTitle', iconColor: '#dc3a16' },
  Black: { className: 'blackTitle', iconColor: '#192948' },
};

const icons = {
  Lock: {
    alt: 'lock',
    title: 'lock',
    component: LockIcon,
  },
  Present: {
    alt: 'present',
    title: 'present',
    component: GiftIcon,
  },
  Tick: {
    alt: 'check',
    title: 'check',
    component: CheckIcon,
  },
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
        <h4 className={`offer-title ${currentColor.className}`}>{title}</h4>
        <div className="offer-price-container">
          <span className="offer-price">{price}</span>
          <span className="offer-price-curency">€</span>
        </div>
        <span className="offer-price-legend">{offerPriceLegend}</span>
        <span className="offer-price-description">{offerdescription}</span>
      </div>
      <div className="offer-column-body">
        <div className="offer-column-body-texts">
          {_.map(offerdetails, (offerdetail, idx) => {
            const icon = icons[offerdetail.icon];
            if (!icon) {
              return null;
            }
            const IconComponent = icon.component;
            return (
              <div key={`offer-detail-${idx}`} className="offer-detail">
                <div className="offer-detail-icon">
                  <IconComponent color={currentColor.iconColor} />
                </div>
                <div>
                  <span className="offer-detail-label">
                    {offerdetail.offerDetailLabel}
                  </span>
                  {_.map(
                    offerdetail.offerDetailSubItems,
                    (offerDetailSubItem, idx) => {
                      const label = _.get(
                        offerDetailSubItem,
                        'offerDetailSubItemLabel',
                      );
                      if (!label) {
                        return null;
                      }
                      return (
                        <span
                          key={`offer-detail-subitem-${idx}`}
                          className={'offer-detail-subitem'}
                        >
                          {label}
                        </span>
                      );
                    },
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="offer-column-body-cta">
          {locale === 'fr' ? 'Choisir' : 'Choose'}
        </button>
      </div>
    </div>
  );
};
