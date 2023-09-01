export const getQueryParams = (object: object) => {
  return Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join("&");
};
