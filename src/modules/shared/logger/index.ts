import { DEBUG } from "@core/config";

export const logger = {
  debug: DEBUG ? console.info.bind(console) : () => {},
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
};

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
