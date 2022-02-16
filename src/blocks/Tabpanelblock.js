import React from 'react';
import _ from 'lodash';
import * as blocks from '../blocks';

const TabPanelBlock = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <section
      id={_.get(props, 'section.section_id')}
      className={'block tab-panel-section bg-white outer'}
    >
      <div className="tab-panel-header ">
        {_.map(_.get(props, 'section.tabs'), (tab, tab_idx) => {
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
      <div className="tab-panel-content ">
        {_.map(_.get(props, 'section.tabs'), (tab, tab_idx) => {
          const isSelected = selectedTab === tab_idx;
          if (!isSelected) return;

          const componentData = _.get(tab, 'childrenpanel[0]');
          const componentName = _.get(componentData, 'component');
          if (!componentName) {
            return null;
          }

          const ChildrenPanelComponent = blocks[componentName];
          const tabData = _.get(componentData, 'Sections[0]');
          if (!ChildrenPanelComponent || !tabData) {
            return null;
          }
          return (
            <div
              className="tab-panel-content"
              key={`children-panel-${tab_idx}`}
            >
              <ChildrenPanelComponent tabData={tabData} {...props} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TabPanelBlock;
