/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DEBUG: string;
  readonly VITE_DIFFICULTY:
    | "very easy"
    | "easy"
    | "normal"
    | "hard"
    | "extreme";
  readonly VITE_MAX_LEVEL: string;
}
