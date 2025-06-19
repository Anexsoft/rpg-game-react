import { WEAPONS } from "@weapons/index";

import { ARMORS } from "@armor/index";

import { AIDS } from "@aid/index";

import AidItem from "./Components/AIDItem";
import BattleItem from "./Components/BattleItem";
import EquippedInventory from "./Components/EquippedInventory";

const handgun = WEAPONS[0];
const armor = ARMORS[0];

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Inventory</h3>
        <div className="grid grid-cols-2 gap-4">
          <EquippedInventory
            label="Weapon"
            name={handgun.name}
            picture={handgun.picture}
          />

          <EquippedInventory
            label="Armor"
            name={armor.name}
            picture={armor.picture}
          />
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Weapons</h4>
        <div className="grid grid-cols-12">
          {WEAPONS.map((weapon) => (
            <BattleItem
              name={weapon.name}
              description={weapon.description}
              picture={weapon.picture}
              rarity={weapon.rarity}
              selected={true}
              quantity={2}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Armors</h4>
        <div className="grid grid-cols-12">
          {ARMORS.map((armor) => (
            <BattleItem
              name={armor.name}
              description={armor.description}
              picture={armor.picture}
              rarity={armor.rarity}
              quantity={14}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">AIDs</h4>
        <div className="grid grid-cols-12">
          {AIDS.map((aid) => (
            <AidItem
              name={aid.name}
              description={aid.description}
              picture={aid.picture}
              quantity={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
