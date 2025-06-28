import { appName, version } from "../../../package.json";

export const APP_NAME = appName;
export const APP_VERSION = version;
export const DEBUG = import.meta.env.VITE_DEBUG === "true";
export const DIFFICULTY = import.meta.env.VITE_DIFFICULTY ?? "normal";
export const START_AT_MAX_LEVEL =
  DEBUG && import.meta.env.VITE_MAX_LEVEL === "true";
