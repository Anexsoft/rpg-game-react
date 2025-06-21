import { STAT_STYLES } from "@ui/theme/stats";

export default function StatBar({
  type,
  value,
  max,
}: {
  type: string;
  value: number;
  max: number;
}) {
  const config = STAT_STYLES[type as keyof typeof STAT_STYLES];
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className="w-full space-y-1">
      <div
        className={`flex justify-between w-full text-xs font-medium ${config.text}`}
      >
        <span>{config.label}</span>
        <span>
          {value}/{max}
        </span>
      </div>

      <div className={`w-full h-2 rounded ${config.bg}`}>
        <div
          className={`h-full rounded ${config.fill}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
