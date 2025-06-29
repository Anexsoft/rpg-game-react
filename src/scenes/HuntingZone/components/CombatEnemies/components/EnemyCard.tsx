import { Sword, Heart, ShieldOff, Hammer, Droplet } from "lucide-react";

import type { Enemy } from "@enemy/types/index.type";

type EnemyCardProps = {
  enemy: Enemy;
};

export default function EnemyCard({ enemy }: EnemyCardProps) {
  const { isAlive, actionStatus } = enemy;

  const isAttacked = actionStatus?.type === "attacked";
  const isAttacking = actionStatus?.type === "attack";
  const isMissed = actionStatus?.type === "missed";

  const { curseEffect } = enemy;

  return (
    <div className="relative">
      {actionStatus && (
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="filter-none saturate-150 contrast-125">
            {isAttacked && (
              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-full animate-pulse text-3xl text-shadow-black ${
                  actionStatus.wasCritical ? "text-5xl" : "text-3xl"
                } text-red-400`}
              >
                <Heart className="w-7 h-7" />-{actionStatus.amount}
              </span>
            )}

            {isAttacking && (
              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-full animate-pulse text-shadow-black text-yellow-200 ${
                  actionStatus.wasCritical ? "text-5xl" : "text-3xl"
                }`}
              >
                <Sword className="w-7 h-7" />+{actionStatus.amount}
              </span>
            )}

            {isMissed && (
              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-full animate-pulse text-2xl text-shadow-black text-gray-400`}
              >
                <ShieldOff className="w-6 h-6" />
                <span className="line-through">+{actionStatus.amount}</span>
              </span>
            )}
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

        <div className="bg-gray-800 border-y border-gray-700 flex items-center justify-center relative">
          <img src={enemy.avatar} alt={enemy.name} className="object-contain" />

          {curseEffect?.type === "blind" && (
            <span className="absolute bottom-2 right-2 flex items-center gap-1 text-gray-400 text-xs shadow-md animate-pulse">
              <Hammer className="w-3 h-3" />
              BLIND
            </span>
          )}

          {curseEffect?.type === "bleeding" && (
            <span className="absolute bottom-2 right-2 flex items-center gap-1 text-red-400 text-xs shadow-md animate-pulse">
              <Droplet className="w-3 h-3" />
              BLEEDING
            </span>
          )}
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
