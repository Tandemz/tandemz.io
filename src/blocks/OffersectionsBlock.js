import React from 'react';
import _ from 'lodash';
import { getLocale } from '../utils';
import { navigate } from 'gatsby';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const COLUMN_WIDTH = 256;

const computeColumnWidth = (numberOfSections, numberOfOffer) => {
  const totalWidth = numberOfSections === 2 ? COLUMN_WIDTH * 2 : 880;
  const columnWidth = numberOfOffer === 1 ? totalWidth : totalWidth / 2;
  return columnWidth;
};

const OfferSectionsBlock = (props) => {
  const { width } = useWindowDimensions();
  const data = _.get(props, 'tabData');
  const numberOfSections = _.get(props, 'numberOfSections');
  if (!data) {
    return null;
  }
  const offerSections = _.get(data, 'offerSections');
  const locale = getLocale(props.pageContext);
  const isSmallMobile = width < 560;
  return (
    <section id={_.get(props, 'section.section_id')} className={'bg-white'}>
      <h3 className="offer-section-title">{data.title}</h3>
      <div
        className="offer-section-content"
        style={{
          width: isSmallMobile
            ? `${COLUMN_WIDTH}px`
            : `${offerSections.length * COLUMN_WIDTH}px`,
        }}
      >
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
              columnWidth={`${columnWidth - 2}px`}
              isSmallMobile={isSmallMobile}
              index={section_idx}
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
    iconClassName: 'blueIcon',
    buttonClassName: 'blueButton',
  },
  Green: {
    labelClassName: 'greenTitle',
    iconClassName: 'greenIcon',
    buttonClassName: 'greenButton',
  },
  Purple: {
    labelClassName: 'purpleTitle',
    iconClassName: 'purpleIcon',
    buttonClassName: 'purpleButton',
  },
  Red: {
    labelClassName: 'redTitle',
    iconClassName: 'redIcon',
    buttonClassName: 'redButton',
  },
  Black: {
    labelClassName: 'blackTitle',
    iconClassName: 'blackIcon',
    buttonClassName: 'blackButton',
  },
};

const icons = {
  Lock: {
    alt: 'lock',
    title: 'lock',
    className: 'ri-lock-line',
  },
  Present: {
    alt: 'present',
    title: 'present',
    className: 'ri-gift-line',
  },
  Tick: {
    alt: 'check',
    title: 'check',
    className: 'ri-check-line',
  },
};

const OfferSectionBlock = ({
  offerSectionData,
  columnWidth,
  isSmallMobile,
  index,
}) => {
  const {
    title,
    color,
    price,
    priceUnit,
    priceSubtitle,
    offerdescription,
    offerdetails,
    isAvailable,
    bottomButtonLabel,
    bottomButtonRedirectionUrl,
  } = offerSectionData;

  const currentColor = colorMatcher[color];

  return (
    <div
      className="offer-column"
      style={{
        width: columnWidth,
        opacity: isAvailable ? 1 : 0.4,
        marginTop: isSmallMobile && index !== 0 ? '16px' : '0px',
      }}
    >
      <div className="offer-column-header">
        <h4 className={`offer-title ${currentColor?.labelClassName}`}>
          {title}
        </h4>
        <div className="offer-price-container">
          <span className="offer-price">{price}</span>
          <span className="offer-price-curency">{priceUnit}</span>
        </div>
        <span className="offer-price-legend">{priceSubtitle}</span>
        <span className="offer-price-description">{offerdescription}</span>
      </div>
      <div className="offer-column-body">
        <div className="offer-column-body-texts">
          {_.map(offerdetails, (offerdetail, idx) => {
            const icon = icons[offerdetail.icon];
            if (!icon) {
              return null;
            }

            return (
              <div key={`offer-detail-${idx}`} className="offer-detail">
                <i
                  className={`${icon.className} ${currentColor.iconClassName}`}
                  style={{ lineHeight: '1em' }}
                />
                <div className="offer-detail-label-container">
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
        {bottomButtonLabel && bottomButtonRedirectionUrl && (
          <button
            onClick={() => {
              navigate(bottomButtonRedirectionUrl);
            }}
            className={`offer-column-body-cta ${currentColor.buttonClassName}`}
          >
            {bottomButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};
