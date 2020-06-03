import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/fr';

import Header from './Header';
import Footer from './Footer';
import '../sass/main.scss';
import '../lib/crisp';
import Head from './Head';

moment.locale('fr');
moment.updateLocale('fr', {
  longDateFormat: {
    ...moment.localeData('fr').longDateFormat,
    LL: 'dddd D MMMM YYYY',
  },
});

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head {...this.props} />
        <div
          id="page"
          className={
            'site palette-' +
            _.get(this.props, 'pageContext.site.siteMetadata.palette')
          }
        >
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
