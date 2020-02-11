import * as React from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { safePrefix } from '../utils';

/**
 * This file is ignored by prettier
 */

const Head = props => {
  const meta = _.get(props, 'pageContext.frontmatter') || {};
  const siteMeta = _.get(props, 'pageContext.site.siteMetadata') || {};

  const title =       meta.title || siteMeta.title;
  const description = meta.description || meta.excerpt || siteMeta.description;
  const keywords =    meta.keywords || siteMeta.keywords;

  const defaultImg = 'https://www.tandemz.io/images/Logo@200.png';
  const image = meta.ogimage ? safePrefix(meta.ogimage, siteMeta.siteUrl) : defaultImg;
  const imageAlt = meta.ogimagealt ? meta.ogtitle : (
    meta.ogimage ? title : 'Tandemz Logo'
  );

  const url = safePrefix(_.get(props, 'pageContext.url'), siteMeta.siteUrl);

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta charSet="utf-8" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords"    content={keywords} />

      <meta name="viewport" content="width=device-width, initialScale=1.0" />
      <meta name="google"   content="notranslate" />

      <meta property="og:title"       content={meta.ogtitle || title} />
      <meta property="og:description" content={meta.ogdescription || description} />
      <meta property="og:type"        content={meta.ogtype || 'website'} />
      <meta property="og:url"         content={url} />

      <meta property="og:image"        content={image} name="image" />
      <meta property="og:image:alt"    content={imageAlt} />

      {(!meta.ogimage || !!meta.og_image_width) && (
          <meta property="og:image:width"  content={meta.og_image_width || 200} />
      )}
      {(!meta.ogimage || !!meta.og_image_height) && (
          <meta property="og:image:height" content={meta.og_image_height || 200} />
      )}

      <meta name="twitter:card"    content={meta.twitter_card || 'summary'} />
      <meta name="twitter:site"    content="@TandemzUX" />
      <meta name="twitter:creator" content="@TandemzUX" />
      <meta name="twitter:image"   content={image} />
      <meta property="fb:app_id"   content="428165038128251" />

      <link rel="icon" href={safePrefix(siteMeta.favicon)} type="image/x-icon" />
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i,900,900i&display=swap');
      </style>

      {meta.metatags &&
        meta.metatags.map(({ name, property, content }) => (
          <meta name={name} property={property} content={content} key={name} />
        ))}

      {meta.schema_org_data_list &&
        meta.schema_org_data_list.map(({ title, content }) => (
          <script className="structured-data-list" type="application/ld+json" key={title}>
            {content}
          </script>
        ))}
    </Helmet>
  );
};
export default Head;

