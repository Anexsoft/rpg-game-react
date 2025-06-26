import type {
  DoubleShotEffect,
  PrecisionShotEffect,
  BlindLightEffect,
} from "./effect.type";
import type { SkillId } from "./ids.type";

export type SkillEffectById = {
  "double-shot": DoubleShotEffect;
  "precision-shot": PrecisionShotEffect;
  "blind-light": BlindLightEffect;
};

export type SkillBehaviorById = {
  "double-shot": "attack";
  "precision-shot": "attack";
  "blind-light": "effect";
};

type SkillBase<K extends SkillId> = {
  id: K;
  behavior: SkillBehaviorById[K];
  name: string;
  description: string;
  picture: string;
  cost: number;
  cooldown: number;
  price: number;
  effect: SkillEffectById[K];
};

export type Skill =
  | SkillBase<"double-shot">
  | SkillBase<"precision-shot">
  | SkillBase<"blind-light">;
