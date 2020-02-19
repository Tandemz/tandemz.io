const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreatePage = ({ page }) => {
  const { context } = page;
  if (!context || !context.frontmatter || !context.name) {
    return;
  }
  const { frontmatter, name } = context;

  if (!frontmatter.legal) {
    return;
  }
  const dir = path.join(__dirname, 'public/data');
  const updatedAt = new Date(frontmatter.updatedAt);
  const file = path.join(dir, `${frontmatter.legal_name}.json`);

  return exists(dir)
    .then(isDirExist => {
      if (!isDirExist) {
        return mkdir(dir);
      }
      return;
    })
    .then(() => {
      return writeFile(file, JSON.stringify(frontmatter));
    })
    .catch(e => {
      console.error(e);
    });
};
