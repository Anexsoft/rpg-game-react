import { Enemy } from "@enemy/types/index.type";

import EnemyCard from "./components/EnemyCard";

type CombatEnemiesProps = {
  enemies: Enemy[];
};

export default function CombatEnemies({ enemies }: CombatEnemiesProps) {
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
