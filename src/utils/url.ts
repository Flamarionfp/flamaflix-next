import { ObjectType } from "@/types/misc";

export const getQueryParams = (object: ObjectType<string>) => {
  return Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join("&");
};
