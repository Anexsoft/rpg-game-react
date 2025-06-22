import { Enemy } from "@enemy/types/index.type";

import EnemyCard from "./components/EnemyCard";

type CombatEnemiesProps = {
  enemies: Enemy[];
};

export default function CombatEnemies({ enemies }: CombatEnemiesProps) {
  return (
    <div className="bg-black/50 border border-gray-700 flex-1 flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {enemies.map((enemy) => (
          <EnemyCard key={enemy.name} enemy={enemy} />
        ))}
      </div>
    </div>
  );
}
