export const templateCompute = (input, params) => {
  if (!input) {
    return "";
  }
  return input.replace(/{(\w*)}/g, (m, key) => {
    return params.hasOwnProperty(key) ? params[key] : "";
  });
};
