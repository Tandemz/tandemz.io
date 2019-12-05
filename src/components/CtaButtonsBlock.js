import * as React from 'react';
import _ from 'lodash';
import CtaButtons from './CtaButtons';

class CtaButtonsBlock extends React.PureComponent {
  render() {
    const { title, actions } = _.get(this.props, 'section', {});

    return (
      <div className="cta-button-block">
        {!!title && <h4 className="cta-button-block__title">{title}</h4>}
        <CtaButtons {...this.props} actions={actions} />
      </div>
    );
  }
}
export default CtaButtonsBlock;
