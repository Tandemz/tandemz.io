import React from 'react';
import _ from 'lodash';
import * as blocks from '../blocks';

const TabPanelBlock = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = _.get(props, 'section.tabs');
  const tab = tabs[selectedTab];
  const childrenPanels = _.get(tab, 'childrenpanel');
  const title = _.get(props, 'section.title');

  console.log('title', JSON.stringify(title, null, 2));
  return (
    <section
      id={_.get(props, 'section.section_id')}
      className={'block tab-panel-section bg-white outer'}
    >
      {title && (
        <div className="block-header">
          <h2 className="block-title">{title}</h2>
        </div>
      )}
      <div className="tab-panel-header">
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
      <div className="tab-panel-contents">
        {_.map(childrenPanels, (panel, panel_idx) => {
          const panelComponentName = _.get(panel, 'component');

          if (!panelComponentName) {
            return null;
          }

          const PanelComponent = blocks[panelComponentName];
          if (!PanelComponent) {
            return null;
          }
          const panelSections = _.get(panel, 'Sections');
          return (
            <div
              className="tab-panel-content"
              key={`children-panel-${selectedTab}-${panel_idx}`}
            >
              {_.map(panelSections, (section, section_idx) => {
                return (
                  <PanelComponent
                    tabData={section}
                    {...props}
                    key={section_idx}
                    numberOfSections={panelSections.length}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TabPanelBlock;
