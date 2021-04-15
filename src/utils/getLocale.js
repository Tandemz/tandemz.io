export default function getLocale(pageContext) {
  if (!pageContext) {
    return 'en';
  }
  if (pageContext.frontmatter && pageContext.frontmatter.locale) {
    return pageContext.frontmatter.locale;
  }
  return pageContext.locale || 'en';
}
