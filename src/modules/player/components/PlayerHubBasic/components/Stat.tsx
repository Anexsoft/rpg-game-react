import { STAT_STYLES } from "@ui/theme/stats";
import type { StatType } from "@ui/types/stats.type";

type StatProps = {
  type: StatType;
  current: number;
  max: number;
};

export default function Stat({ type, current, max }: StatProps) {
  const config = STAT_STYLES[type as keyof typeof STAT_STYLES];

  const percentage = Math.max(0, Math.min(100, (current / max) * 100));

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
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
