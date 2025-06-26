import { useEffect, useState } from "react";

import { Zap } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import ActionButton from "@ui/ActionButton";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";
import type {
  SkillBehaviourAttack,
  SkillBehaviourEffect,
} from "@skills/types/behaviour.type";

type CombatSkillsProps = {
  turn: number;
  isPlayerTurn: boolean;
  onClick: (type: SkillBehaviourAttack | SkillBehaviourEffect) => void;
};

export default function CombatSkills({
  isPlayerTurn,
  turn,
  onClick,
}: CombatSkillsProps) {
  const { player } = useGame();
  const [turnsUntilAttack, setTurnsUntilAttack] = useState(0);

  const skill = player.selectedSkill
    ? SkillGetByIdHandler.handle(player.selectedSkill)
    : null;

  const canUseSkill =
    !!skill &&
    isPlayerTurn &&
    turnsUntilAttack >= skill.cooldown &&
    skill.cost <= player.sta;

  const handleSkillAttack = () => {
    if (canUseSkill && skill) {
      onClick(skill.behavior);
      setTurnsUntilAttack(0);
    }
  };

  useEffect(() => {
    if (turn > 1) {
      setTurnsUntilAttack((prev) => prev + 1);
    }
  }, [turn]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "e") {
        handleSkillAttack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canUseSkill, skill]);

  if (!skill) {
    return <p className="text-sm text-gray-400">No skill selected</p>;
  }

  return (
    <div className="flex items-center gap-4 rounded">
      <div className="border border-gray-600 rounded overflow-hidden">
        <img
          src={skill.picture}
          alt={skill.name}
          className="w-16 h-16 object-contain flex-shrink-0"
        />
      </div>

      <div className="flex flex-col flex-1 text-left">
        <span className="text-white font-semibold text-sm">{skill.name}</span>
        <span className="text-gray-300 text-xs">{skill.description}</span>
        <p className="text-gray-300 text-xs mt-2 flex gap-4">
          <span>
            <b className="text-cyan-500">STA</b>: {skill.cost}
          </span>
          <span>
            <b className="text-blue-300">Cooldown</b>:{" "}
            {turnsUntilAttack > skill.cooldown
              ? skill.cooldown
              : turnsUntilAttack}
            /{skill.cooldown} turns
          </span>
        </p>
      </div>

      <div className="w-30">
        <ActionButton
          disabled={!canUseSkill}
          icon={Zap}
          onClick={handleSkillAttack}
        >
          Use
        </ActionButton>
      </div>
    </div>
  );
}
