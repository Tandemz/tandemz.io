import * as React from 'react';
import { navigate } from 'gatsby';
import Select from './form/Select';

const getLocaleName = (locale) => {
  if (!window.Intl || !Intl.DisplayNames) {
    return locale;
  }
  const localeName = new Intl.DisplayNames([locale], { type: 'language' }).of(
    locale,
  );
  return localeName.charAt(0).toUpperCase() + localeName.slice(1);
};

export default function LocaleSelector({ page }) {
  const options = React.useMemo(
    () => [
      {
        label: getLocaleName(page.locale),
        value: page.url,
      },

      ...page.otherLocalesPages.map(({ locale, url }) => ({
        label: getLocaleName(locale),
        value: `${url}?_lang=${locale}`,
      })),
    ],
    [page],
  );
  console.log(options);

  React.useEffect(() => {
    if (/lang=[a-z]{2}/.test(window.location.search)) {
      return;
    }

    const languages =
      navigator.languages != undefined
        ? [...navigator.languages]
        : [navigator.language || 'en'];
    languages.push('en');

    for (let i = 0; i < languages.length; i++) {
      const lang = languages[i];
      if (lang === page.locale) {
        return;
      }
      const matchingPage = page.otherLocalesPages.find(
        ({ locale }) => locale === lang,
      );
      if (matchingPage) {
        navigate(`${matchingPage.url}?_lang=${matchingPage.locale}`);
        return;
      }
    }
  }, [page]);

  const _onChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <Select options={options} value={page.url} onChange={_onChange} gray />
  );
}
