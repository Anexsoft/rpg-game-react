import { STAT_STYLES } from "@ui/theme/stats";

import { calculatePlayerExpProgress } from "@player/utils";

type ProgressExpBarProps = {
  level: number;
  value: number;
  max: number;
};

export default function ProgressExpBar({
  level,
  value,
  max,
}: ProgressExpBarProps) {
  const config = STAT_STYLES["exp"];
  const percentage = calculatePlayerExpProgress(level, value);

  return (
    <div>
      <div className={`mb-1 flex justify-between text-xs ${config.text}`}>
        <span>{config.label}</span>
        <span>
          {value}/{max}
        </span>
      </div>

      <div className={`h-3 w-full rounded ${config.bg}`}>
        <div
          className={`h-full rounded ${config.fill}`}
          style={{ width: `${percentage * 100}%` }}
        />
      </div>
    </div>
  );
}
