import {
  BASE_HP,
  HP_PER_VIT,
  BASE_MP,
  ST_PER_NRG,
  EVA_PER_DEX,
  CTR_PER_LUK,
  BASE_DMG,
  DMG_PER_STR,
  RES_PER_LEVEL,
} from "@player/defs/stats-progress";
import type { Player } from "@player/types/index.types";

export class PlayerUpgradeHandler {
  static handle(player: Player): void {
    player.maxHp = Math.round(BASE_HP + player.vit * HP_PER_VIT);
    player.maxSta = Math.round(BASE_MP + player.nrg * ST_PER_NRG);

    player.eva = parseFloat((player.dex * EVA_PER_DEX).toFixed(2));
    player.ctr = parseFloat((player.luk * CTR_PER_LUK).toFixed(2));
    player.dmg = Math.round(BASE_DMG + player.str * DMG_PER_STR);

    player.hp = Math.round(player.maxHp);
    player.sta = Math.round(player.maxSta);

    player.res = player.level * RES_PER_LEVEL;
  }
}
