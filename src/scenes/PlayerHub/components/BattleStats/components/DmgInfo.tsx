import { STAT_STYLES } from "@ui/theme/stats";

type DmgInfoProps = {
  incrementRate: number;
  damage: number;
};

export default function DmgInfo({ incrementRate, damage }: DmgInfoProps) {
  const style = STAT_STYLES["dmg"];

  return (
    <div className="flex justify-between items-start py-2">
      <div className="flex-1 pr-4">
        <div className={`font-semibold ${style.text}`}>{style.label}</div>
        <div className="text-sm text-gray-400">{style.longDescription}</div>
      </div>
      <div className="flex flex-col items-end w-[80px] font-bold text-right">
        <span className={`text-xl ${style.text}`}>{damage.toFixed(1)}</span>
        <hr className="w-10 border-t border-gray-600 my-1" />
        <span className="flex items-center gap-1 text-gray-400">
          +{(incrementRate * 100).toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
