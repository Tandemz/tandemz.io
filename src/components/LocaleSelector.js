import * as React from 'react';
import { navigate } from 'gatsby';
import Select from './form/Select';
import getLocale from '../utils/getLocale';

const getLocaleName = (locale) => {
  if (typeof window === 'undefined') {
    return locale;
  }
  if (!window.Intl || !Intl.DisplayNames) {
    return locale;
  }
  const localeName = new Intl.DisplayNames([locale], { type: 'language' }).of(
    locale,
  );
  return localeName.charAt(0).toUpperCase() + localeName.slice(1);
};

function getSavedLocale() {
  if (typeof window === 'undefined') {
    return;
  }
  return window.localStorage.getItem('_lang');
}

function saveLocale(locale) {
  if (typeof window === 'undefined') {
    return;
  }
  return window.localStorage.setItem('_lang', locale);
}

export default function LocaleSelector({ page }) {
  const locale = getLocale(page);

  const options = React.useMemo(
    () => [
      {
        label: getLocaleName(locale),
        value: locale,
        url: page.url,
      },

      ...page.otherLocalesPages.map((_page) => ({
        label: getLocaleName(getLocale(_page)),
        value: getLocale(_page),
        url: _page.url,
      })),
    ],
    [page, locale],
  );

  React.useEffect(() => {
    const savedLocale = getSavedLocale();
    if (savedLocale && savedLocale === locale) {
      return;
    }

    const languages =
      navigator.languages != undefined
        ? [...navigator.languages]
        : [navigator.language || 'en'];
    languages.push('en');

    for (let i = 0; i < languages.length; i++) {
      const lang = languages[i];
      if (lang === locale) {
        return;
      }
      const matchingPage = page.otherLocalesPages.find(
        (_page) => getLocale(_page) === lang,
      );
      if (matchingPage) {
        saveLocale(getLocale(matchingPage));
        navigate(`${matchingPage.url}${window.location.search}`);
        return;
      }
    }
  }, [page, locale]);

  const _onChange = (e) => {
    saveLocale(e.target.value);
    const option = options.find(({ value }) => value === e.target.value);
    if (!option) {
      return;
    }
    navigate(`${option.url}${window.location.search}`);
  };

  return <Select options={options} value={locale} onChange={_onChange} gray />;
}
