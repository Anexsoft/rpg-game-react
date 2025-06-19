import { STAT_STYLES } from "@ui/theme/stats";
import type { StatType } from "@ui/types/stats.type";

type Props = {
  type: StatType;
  value: number;
  isPercent?: boolean;
};

export default function StatInfo({ type, value, isPercent = false }: Props) {
  const style = STAT_STYLES[type as keyof typeof STAT_STYLES];

  return (
    <div className="flex justify-between items-start py-2">
      <div>
        <div className={`font-semibold ${style.text}`}>{style.label}</div>
        <div className="text-sm text-gray-400">{style.longDescription}</div>
      </div>
      <div className={`text-lg font-bold ${style.text}`}>
        {isPercent ? `${value}%` : value}
      </div>
    </div>
  );
}
