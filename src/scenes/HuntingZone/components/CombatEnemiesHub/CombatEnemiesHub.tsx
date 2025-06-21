import { EnemyCreateHandler } from "@enemy/handlers/enemy-create.handler";
import type { EnemyId } from "@enemy/types/ids.type";
import { Enemy } from "@enemy/types/index.type";

import EnemyCard from "./components/EnemyCard";

export default function CombatEnemiesHub() {
  const ids: EnemyId[] = [
    "female-zombie-1",
    "male-zombie-1",
    "male-zombie-2",
    "doctor-zombie-1",
    "police-zombie-1",
    "nurse-zombie-1",
    "dog-zombie-1",
    "raptor-1",
    "stalker-1",
    "titan-1",
  ];

  const enemies: Enemy[] = ids.map((id) => EnemyCreateHandler.handle(id));

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-4">
        {enemies.map((enemy: Enemy) => (
          <EnemyCard key={enemy.name} enemy={enemy} />
        ))}
      </div>
    </div>
  );
}
