import {
  BASE_HP,
  HP_PER_VIT,
  BASE_MP,
  ST_PER_NRG,
  EVA_PER_DEX_RATE,
  CTR_PER_LUK_RATE,
  DMG_PER_STR_RATE,
} from "@player/stats-progress";
import type { Player } from "@player/types/index.types";

export class PlayerUpgradeHandler {
  static handle(player: Player): Player {
    const maxHp = Math.round(BASE_HP + player.vit * HP_PER_VIT);
    const maxSta = Math.round(BASE_MP + player.nrg * ST_PER_NRG);

    const eva = parseFloat((player.dex * EVA_PER_DEX_RATE * 100).toFixed(3));
    const ctr = parseFloat((player.luk * CTR_PER_LUK_RATE * 100).toFixed(3));
    const dmg = parseFloat((player.str * DMG_PER_STR_RATE * 100).toFixed(3));

    return {
      ...player,
      maxHp,
      maxSta,
      hp: maxHp,
      sta: maxSta,
      eva,
      ctr,
      dmg,
    };
  }
}
