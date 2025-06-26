import { PlayerSelectSkillHandler } from "@player/handlers/player-select-skill.handler";
import type { Player } from "@player/types/index.types";

import { SKILLS } from "@skills/index";
import type { SkillId } from "@skills/types/ids.type";

type SkillsProps = {
  player: Player;
  setPlayer: (player: Player) => void;
};

export default function Skills({ player, setPlayer }: SkillsProps) {
  const acquiredSkills = SKILLS.filter((skill) =>
    player.skills.includes(skill.id)
  );

  const handleSelect = (skillId: SkillId) => {
    setPlayer(PlayerSelectSkillHandler.handle(player, skillId));
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Acquired Skills</h3>

      {acquiredSkills.length === 0 ? (
        <p className="text-sm text-gray-400">
          No skills have been acquired yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {acquiredSkills.map((skill) => {
            const isSelected = player.selectedSkill === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => handleSelect(skill.id)}
                className={`p-4 rounded flex gap-4 border transition cursor-pointer
                  ${
                    isSelected
                      ? "border-green-500 bg-green-500/10"
                      : "border-gray-700 bg-black/60 hover:bg-green-500/10"
                  }`}
              >
                <img
                  src={skill.picture}
                  alt={skill.name}
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div className="flex flex-col flex-1">
                  <span className="text-white font-semibold text-sm">
                    {skill.name}
                  </span>
                  <span className="text-gray-300 text-xs mt-1">
                    {skill.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
