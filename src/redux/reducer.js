import { chnageText } from "../constants";

export const posts = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case "loading":
      return payload;
    case "failed":
      return payload;
    case "success":
      return payload;
    case chnageText:
      return payload;
    default:
      return state;
  }
};
