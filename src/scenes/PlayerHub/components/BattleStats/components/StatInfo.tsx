import { PlusSquare } from "lucide-react";

import { STAT_STYLES } from "@ui/theme/stats";
import type { StatType, UpgradableStats } from "@ui/types/stats.type";

type StatInfoProps = {
  type: StatType;
  value: number;
  isPercent?: boolean;
  enableStatUpgradeButton?: boolean;
  handleUpgradeStat?: (type: UpgradableStats) => void;
};

export default function StatInfo({
  type,
  value,
  isPercent = false,
  enableStatUpgradeButton = false,
  handleUpgradeStat,
}: StatInfoProps) {
  const style = STAT_STYLES[type as keyof typeof STAT_STYLES];

  return (
    <div className="flex justify-between items-start py-2">
      <div className="flex-1 pr-4">
        <div className={`font-semibold ${style.text}`}>{style.label}</div>
        <div className="text-sm text-gray-400">{style.longDescription}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className={`w-[80px] text-lg font-bold ${style.text} text-right`}>
          {isPercent ? `${(value * 100).toFixed(1)}%` : value}
        </div>
        {enableStatUpgradeButton && (
          <PlusSquare
            onClick={() =>
              handleUpgradeStat && handleUpgradeStat(type as UpgradableStats)
            }
            className="cursor-pointer text-gray-500 hover:text-gray-300 transition-colors duration-200"
          />
        )}
      </div>
    </div>
  );
}
