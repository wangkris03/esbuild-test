import { nanoid } from "nanoid";
import { getRequest } from "../lib/fetch";

export const genId = () => {
  const id = nanoid(10);
  console.log(`Gen id : ${id}`);
  return id;
};

export const getFetch = () => {
  getRequest();
};
