import { useGame } from "@core/context/GameContext";

import Rarity from "@shared/components/Rarity";

import Block from "@ui/Block";

import { PlayerBuyItemHandler } from "@player/handlers/player-buy-item.handler";
import { PlayerBuySkillHandler } from "@player/handlers/player-buy-skill.handler";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";

import { sortByTypeAndRestoreRate } from "@consumables/filters/index.filter";
import { CONSUMABLES } from "@consumables/index";

import type { ItemBase } from "@src/modules/items/types/index.type";
import { SKILLS } from "@src/modules/skills";
import type { Skill } from "@src/modules/skills/types/index.type";

import type { StoreNotification } from "../types";

type SellerItemsProps = {
  setNotification: (value: StoreNotification) => void;
};

export default function SellerItems({ setNotification }: SellerItemsProps) {
  const { player, setPlayer } = useGame();

  const itemLevels = [0, 1, 2];

  const weapons = WEAPONS.sort(sortWeaponByRarityAndName).filter((item) =>
    itemLevels.includes(item.level)
  );

  const armors = ARMORS.sort(sortArmorByRarityAndName).filter(
    (item) => item.rarity === "standard" && itemLevels.includes(item.level)
  );

  const consumables = CONSUMABLES.sort(sortByTypeAndRestoreRate);

  const items: ItemBase[] = [...weapons, ...armors, ...consumables];
  const skills: Skill[] = SKILLS.filter(
    (skill) => !player.skills.includes(skill.id)
  ).sort((a, b) => b.price - a.price);

  const handleBuyItemClick = (item: ItemBase) => {
    const result = PlayerBuyItemHandler.handle(player, item.id);

    if (result.status === "success") {
      setNotification({
        type: "success",
        content: `${item.name} purchased successfully.`,
      });
      setPlayer(result.player);
    }

    if (result.status === "not-enough-gold") {
      setNotification({
        type: "warning",
        content: `Not enough gold to buy ${item.name}.`,
      });
    }
  };

  const handleBuySkillClick = (skill: Skill) => {
    const result = PlayerBuySkillHandler.handle(player, skill.id);

    if (result.status === "success") {
      setNotification({
        type: "success",
        content: `${skill.name} purchased successfully.`,
      });
      setPlayer(result.player);
    }

    if (result.status === "not-enough-gold") {
      setNotification({
        type: "warning",
        content: `Not enough gold to buy ${skill.name}.`,
      });
    }

    if (result.status === "already-owned") {
      setNotification({
        type: "warning",
        content: `You already own the skill "${skill.name}".`,
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-white text-lg font-bold mb-2">Items</h2>
      <div
        className="grid grid-cols-3 gap-4 max-h-[380px] overflow-y-auto pr-1"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
        }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleBuyItemClick(item)}
            className="bg-black/60 border border-gray-700 hover:border-gray-500 p-4 rounded flex transition cursor-pointer gap-4 text-left"
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-20 h-20 object-contain flex-shrink-0"
            />
            <div className="flex flex-col flex-1">
              <div className="flex justify-between text-xs items-start">
                <span className="font-semibold text-white">{item.name}</span>
                <span className="font-bold text-yellow-400">
                  {item.price.toLocaleString()}₲
                </span>
              </div>
              <span className="text-xs">
                <Rarity rarity={item.rarity} />
              </span>
              <span className="text-xs text-gray-300 mt-1">
                {item.description}
              </span>
            </div>
          </button>
        ))}
      </div>

      <h2 className="text-white text-lg font-bold mb-2">Skills</h2>
      <div
        className="grid grid-cols-3 gap-4 max-h-[280px] overflow-y-auto pr-1"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
        }}
      >
        {skills.length > 0 ? (
          skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => handleBuySkillClick(skill)}
              className="bg-black/60 border border-gray-700 hover:border-gray-500 p-4 rounded flex transition cursor-pointer gap-4 text-left"
            >
              <img
                src={skill.picture}
                alt={skill.name}
                className="w-20 h-20 object-contain flex-shrink-0"
              />
              <div className="flex flex-col flex-1">
                <div className="flex justify-between text-xs items-start">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="font-bold text-yellow-400">
                    {skill.price.toLocaleString()}₲
                  </span>
                </div>
                <span className="text-xs text-gray-300 mt-1">
                  {skill.description}
                </span>
              </div>
            </button>
          ))
        ) : (
          <Block className="col-span-3 text-center text-sm text-gray-300 p-10">
            No skills available for purchase.
          </Block>
        )}
      </div>
    </div>
  );
}
