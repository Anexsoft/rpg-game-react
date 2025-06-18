import { SIGNED_IN_KEY } from "../defs";

export default () => {
  localStorage.removeItem(SIGNED_IN_KEY);
};
