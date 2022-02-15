import React from 'react';
import _ from 'lodash';

const TabPanelBlock = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <section
      id={_.get(props, 'section.section_id')}
      className={'block bg-white outer'}
    >
      <div className="tabPanelHeader ">
        {_.map(_.get(props, 'section.tabs'), (tab, tab_idx) => {
          const isSelected = selectedTab === tab_idx;
          return (
            <div
              key={`tab-header-${tab_idx}`}
              className={`tabButton ${isSelected ? 'selected' : ''}`}
            >
              <span className={`tabButtonLabel `}>
                {_.get(tab, 'tablabel')}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TabPanelBlock;
