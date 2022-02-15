import React from 'react';
import _ from 'lodash';

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
    </section>
  );
};
export default TabPanelBlock;
