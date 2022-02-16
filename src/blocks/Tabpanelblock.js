import React from 'react';
import _ from 'lodash';
import * as blocks from '../blocks';

const TabPanelBlock = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = _.get(props, 'section.tabs');
  const tab = tabs[selectedTab];
  const panelComponentData = _.get(tab, 'childrenpanel[0]');

  const panelComponentName = _.get(panelComponentData, 'component');

  if (!panelComponentName) {
    return null;
  }

  const PanelComponent = blocks[panelComponentName];
  if (!PanelComponent) {
    return null;
  }
  return (
    <section
      id={_.get(props, 'section.section_id')}
      className={'block tab-panel-section bg-white outer'}
    >
      <div className="tab-panel-header ">
        {_.map(tabs, (tab, tab_idx) => {
          const isSelected = selectedTab === tab_idx;
          return (
            <button
              key={`tab-header-${tab_idx}`}
              className={`tab-button ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedTab(tab_idx)}
            >
              <span
                className={`tab-button-label ${isSelected ? 'selected' : ''}`}
              >
                {_.get(tab, 'tablabel')}
              </span>
            </button>
          );
        })}
      </div>
      <div className="tab-panel-content" key={`children-panel-${selectedTab}`}>
        {_.map(
          _.get(panelComponentData, 'Sections'),
          (section, section_idx) => {
            return (
              <PanelComponent tabData={section} {...props} key={section_idx} />
            );
          },
        )}
      </div>
    </section>
  );
};
export default TabPanelBlock;
