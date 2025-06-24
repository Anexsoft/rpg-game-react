import { STAT_STYLES } from "@ui/theme/stats";

import { calculatePlayerExpProgress } from "@player/utils";

type ExpProps = {
  level: number;
  current: number;
  max: number;
};

export default function Exp({ level, current, max }: ExpProps) {
  const config = STAT_STYLES["exp"];
  const percentage = calculatePlayerExpProgress(level, current);

  return (
    <div>
      <div className={`mb-1 flex justify-between text-xs ${config.text}`}>
        <span>{config.label}</span>
        <span>
          {current}/{max}
        </span>
      </div>

      <div className={`h-2 w-full rounded ${config.bg}`}>
        <div
          className={`h-full rounded ${config.fill}`}
          style={{ width: `${percentage * 100}%` }}
        />
      </div>
    </div>
  );
}
