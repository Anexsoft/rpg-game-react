import { STORED_PLAYER_PREFIX } from "../defs";

export default (name: string) => {
  const key = STORED_PLAYER_PREFIX.replace("player", name.toUpperCase());
  const stored = localStorage.getItem(key);

  return !!stored;
};
