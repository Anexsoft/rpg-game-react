import { STAT_STYLES } from "@ui/theme/stats";
import type { StatType } from "@ui/types/stats.type";

type ProgressStatProps = {
  type: StatType;
  value: number;
  max: number;
};

export default function ProgressStat({ type, value, max }: ProgressStatProps) {
  const config = STAT_STYLES[type as keyof typeof STAT_STYLES];

  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

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
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
