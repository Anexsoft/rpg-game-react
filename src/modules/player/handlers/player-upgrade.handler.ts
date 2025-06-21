import {
  BASE_HP,
  HP_PER_VIT,
  BASE_MP,
  ST_PER_NRG,
  EVA_PER_DEX,
  CTR_PER_LUK,
  DMG_PER_STR,
  RES_PER_LEVEL,
} from "@player/defs/stats-progress";
import type { Player } from "@player/types/index.types";

export class PlayerUpgradeHandler {
  static handle(player: Player): Player {
    const maxHp = Math.round(BASE_HP + player.vit * HP_PER_VIT);
    const maxSta = Math.round(BASE_MP + player.nrg * ST_PER_NRG);
    const eva = parseFloat((player.dex * EVA_PER_DEX).toFixed(2));
    const ctr = parseFloat((player.luk * CTR_PER_LUK).toFixed(2));
    const dmg = parseFloat((player.str * DMG_PER_STR).toFixed(2));
    const res = player.level * RES_PER_LEVEL;

    return {
      ...player,
      maxHp,
      maxSta,
      hp: maxHp,
      sta: maxSta,
      eva,
      ctr,
      dmg,
      res,
    };
  }
}
