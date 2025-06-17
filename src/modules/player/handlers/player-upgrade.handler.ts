import {
  BASE_HP,
  HP_PER_VIT,
  BASE_MP,
  MP_PER_INT,
  EVA_PER_DEX,
  CTR_PER_LUK,
  BASE_DMG,
  DMG_PER_STR,
  RES_PER_LEVEL,
} from "@player/defs/stats-progress";
import type { Player } from "@player/types/player";

export class PlayerUpgradeHandler {
  static handle(player: Player): void {
    player.maxHp = Math.round(BASE_HP + player.vit * HP_PER_VIT);
    player.maxMp = Math.round(BASE_MP + player.int * MP_PER_INT);

    player.eva = parseFloat((player.dex * EVA_PER_DEX).toFixed(2));
    player.ctr = parseFloat((player.luk * CTR_PER_LUK).toFixed(2));
    player.dmg = Math.round(BASE_DMG + player.str * DMG_PER_STR);

    player.hp = Math.round(player.maxHp);
    player.mp = Math.round(player.maxMp);

    player.res = player.level * RES_PER_LEVEL;
  }
}
