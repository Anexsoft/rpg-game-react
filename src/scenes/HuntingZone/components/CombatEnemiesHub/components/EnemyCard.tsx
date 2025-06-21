import type { Enemy } from "@enemy/types/index.type";

type EnemyCardProps = {
  enemy: Enemy;
};

export default function EnemyCard({ enemy }: EnemyCardProps) {
  return (
    <div className="bg-black/50 border border-gray-700 rounded w-50 overflow-hidden text-sm">
      <div className="flex justify-between font-bold  bg-black p-2">
        <span className="text-gray-400">{enemy.name}</span>
        <span className="text-gray-300">Lv. {enemy.level}</span>
      </div>

      <div className="bg-gray-800 border-t border-b border-gray-700 flex items-center justify-center">
        <img src={enemy.avatar} alt={enemy.name} className="object-contain" />
      </div>

      <div className="border-b border-gray-700 text-xs p-2">
        <div className="flex justify-between text-red-400 font-semibold mb-1">
          <span>HP</span>
          <span>
            {enemy.hp}/{enemy.maxHp}
          </span>
        </div>

        <div className="w-full h-2 bg-gray-800 rounded">
          <div
            className="h-2 bg-red-500 rounded"
            style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center text-xs">
        <div className="border-r border-gray-700 p-2">
          <p className="text-gray-400 font-semibold">ATK</p>
          <p className="text-red-400">{enemy.dmg}</p>
        </div>
        <div className="border-r border-gray-700 p-2">
          <p className="text-gray-400 font-semibold">EVA</p>
          <p className="text-yellow-400">{(enemy.eva * 100).toFixed(1)}%</p>
        </div>
        <div className="p-2">
          <p className="text-gray-400 font-semibold">CTR</p>
          <p className="text-blue-400">{(enemy.ctr * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}
