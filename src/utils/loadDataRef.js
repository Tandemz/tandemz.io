import _get from 'lodash/get';

export default function(pageContext, ref) {
  const regex = /^src\/data\/(.+)\.(json|yml)$/;
  if (!regex.test(ref)) {
    return '';
  }

  const matches = regex.exec(ref);
  const dataFilePath = matches[1];

  return _get(pageContext, `site.data.${dataFilePath.replace('/', '.')}`);
}
