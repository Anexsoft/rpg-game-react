import { Sword, Heart } from "lucide-react";

import type { Enemy } from "@enemy/types/index.type";

type EnemyCardProps = {
  enemy: Enemy;
};

export default function EnemyCard({ enemy }: EnemyCardProps) {
  const { isAlive, actionStatus } = enemy;
  const isAttacked = actionStatus?.type === "attacked";
  const isAttacking = actionStatus?.type === "attacking";

  return (
    <div className="relative">
      {actionStatus && (
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="filter-none saturate-150 contrast-125">
            <span
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold animate-pulse text-3xl text-shadow-black ${
                isAttacking ? "text-yellow-200" : "text-red-400"
              } ${actionStatus?.wasCritical ? "text-5xl" : "text-3xl"}`}
            >
              {isAttacking ? (
                <>
                  <Sword className="w-7 h-7" />+{actionStatus.amount}
                </>
              ) : (
                <>
                  <Heart className="w-7 h-7" />-{actionStatus.amount}
                </>
              )}
            </span>
          </div>
        </div>
      )}
      <div
        className={`relative rounded w-50 overflow-hidden text-sm border transition-transform duration-200 ${
          !isAlive ? "grayscale" : ""
        } ${isAttacking ? "border-gray-400" : "border-gray-700"} ${
          isAttacked ? "animate-pulse scale-105" : ""
        }`}
      >
        <div
          className={`flex justify-between font-bold p-2 transition text-gray-300 ${
            isAttacking ? "bg-gray-900" : "bg-black"
          }`}
        >
          <span>{enemy.name}</span>
          <span>Lv. {enemy.level}</span>
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
            <p className="text-gray-400 font-semibold">RES</p>
            <p className="text-yellow-400">{(enemy.res * 100).toFixed(1)}%</p>
          </div>
          <div className="p-2">
            <p className="text-gray-400 font-semibold">CTR</p>
            <p className="text-blue-400">{(enemy.ctr * 100).toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
