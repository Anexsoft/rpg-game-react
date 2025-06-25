import Block from "@ui/Block";

import { Enemy } from "@enemy/types/index.type";

import EnemyCard from "./components/EnemyCard";

type CombatEnemiesProps = {
  enemies: Enemy[];
};

export default function CombatEnemies({ enemies }: CombatEnemiesProps) {
  return (
    <Block className="flex-1 flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {enemies.map((enemy) => (
          <EnemyCard key={enemy.id} enemy={enemy} />
        ))}
      </div>
    </Block>
  );
}
