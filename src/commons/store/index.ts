import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { v4 as uuidv4 } from "uuid";

export const accessTokenState = atom({
  key: "accessTokenState" + uuidv4(),
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const searchCourseList = atom({
  key: "search" + uuidv4(),
  default: "",
});
