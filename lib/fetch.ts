import _fetch from "node-fetch";
global.fetch = _fetch;

export const getRequest = () => {
  return fetch("/url");
};
