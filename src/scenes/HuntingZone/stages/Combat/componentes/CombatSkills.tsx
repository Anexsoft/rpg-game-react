import { Zap } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import ActionButton from "@ui/ActionButton";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";

type CombatSkillsProps = {
  turn: number;
  isPlayerTurn: boolean;
};

export default function CombatSkills({
  turn,
  isPlayerTurn,
}: CombatSkillsProps) {
  const { player } = useGame();
  const skill = player.selectedSkill
    ? SkillGetByIdHandler.handle(player.selectedSkill)
    : null;

  if (!skill) {
    return <p className="text-sm text-gray-400">No skill selected</p>;
  }

  const canUseSkill = isPlayerTurn && turn % skill.cooldown === 0;

  return (
    <div className="flex items-center gap-4 rounded">
      <div className="border border-gray-600 rounded overflow-hidden">
        <img
          src={skill.picture}
          alt={skill.name}
          className="w-16 h-16 object-contain flex-shrink-0 "
        />
      </div>

      <div className="flex flex-col flex-1 text-left">
        <span className="text-white font-semibold text-sm">{skill.name}</span>
        <span className="text-gray-300 text-xs">{skill.description}</span>
        <span className="text-gray-400 text-xs mt-1 italic">
          Can be used each {skill.cooldown} turns
        </span>
      </div>

      <div className="w-30">
        <ActionButton
          disabled={!canUseSkill}
          icon={Zap}
          onClick={() => console.info("Use skill")}
        >
          Use
        </ActionButton>
      </div>
    </div>
  );
}
