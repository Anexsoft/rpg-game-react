import { MAX_LEVEL } from "@player/defs/levels";
import type { Player } from "@player/types/index.types";

import ProgressBar from "./components/ProgressBar";

type CoreAttributesProps = {
  player: Player;
};

export default function CoreAttributes({ player }: CoreAttributesProps) {
  return (
    <>
      <h3 className="text-lg font-bold text-white mb-2">Core Attributes</h3>
      <div className="grid grid-cols-2 gap-4">
        <ProgressBar type="hp" value={player.hp} max={player.maxHp} />
        <ProgressBar type="sta" value={player.sta} max={player.maxSta} />
        <ProgressBar
          type="exp"
          value={player.exp}
          max={player.expToNextLevel}
        />
        <ProgressBar type="lvl" value={player.level} max={MAX_LEVEL} />
      </div>
    </>
  );
}
