import React from 'react';
import _ from 'lodash';
import { getLocale } from '../utils';
import { LockIcon } from '../components/icons/LockIcon';
import { GiftIcon } from '../components/icons/GiftIcon';
import { CheckIcon } from '../components/icons/CheckIcon';
import { navigate } from 'gatsby';

const computeColumnWidth = (numberOfSections, numberOfOffer) => {
  const totalWidth = numberOfSections === 2 ? 512 : 880;
  const columnWidth = numberOfOffer === 1 ? totalWidth : totalWidth / 2;
  return columnWidth;
};

const OfferSectionsBlock = (props) => {
  const data = _.get(props, 'tabData');
  const numberOfSections = _.get(props, 'numberOfSections');
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
          const columnWidth = computeColumnWidth(
            numberOfSections,
            offerSections.length,
          );
          return (
            <OfferSectionBlock
              key={`offer-section-${section_idx}`}
              offerSectionData={offerSectionData}
              locale={locale}
              columnWidth={`${columnWidth}px`}
            />
          );
        })}
      </div>
    </section>
  );
};
export default OfferSectionsBlock;

const colorMatcher = {
  Blue: {
    labelClassName: 'blueTitle',
    iconColor: '#1493ff',
    buttonClassName: 'blueButton',
  },
  Green: {
    labelClassName: 'greenTitle',
    iconColor: '#0b8749',
    buttonClassName: 'greenButton',
  },
  Purple: {
    labelClassName: 'purpleTitle',
    iconColor: '#7525dc',
    buttonClassName: 'purpleButton',
  },
  Red: {
    labelClassName: 'redTitle',
    iconColor: '#dc3a16',
    buttonClassName: 'redButton',
  },
  Black: {
    labelClassName: 'blackTitle',
    iconColor: '#192948',
    buttonClassName: 'blackButton',
  },
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

const OfferSectionBlock = ({ offerSectionData, locale, columnWidth }) => {
  const { title, color, price, offerdescription, offerdetails, isAvailable } =
    offerSectionData;

  const currentColor = colorMatcher[color];
  const offerPriceLegend =
    locale === 'fr' ? 'par participant' : 'per participant';

  const onButtonClick = () => {
    navigate('https://app.tandemz.io/recruit-participants');
  };
  return (
    <div
      className="offer-column"
      style={{ width: columnWidth, opacity: isAvailable ? 1 : 0.4 }}
    >
      <div className="offer-column-header">
        <h4 className={`offer-title ${currentColor.labelClassName}`}>
          {title}
        </h4>
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
        <button
          onClick={onButtonClick}
          className={`offer-column-body-cta ${currentColor.buttonClassName}`}
        >
          {locale === 'fr' ? 'Choisir' : 'Choose'}
        </button>
      </div>
    </div>
  );
};
