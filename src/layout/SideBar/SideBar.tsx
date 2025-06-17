import { APP_NAME, APP_VERSION } from "@core/config/index";

import PlayerHubBasic from "@player/components/PlayerHubBasic";

import ActionGroupItems from "./components/ActionGroupItems";
import ActionItem from "./components/ActionItem";
import { menu } from "./defs";

export default function SideBar() {
  return (
    <>
      <div className="bg-black p-4 flex items-center justify-between text-white font-bold text-lg">
        <span>{APP_NAME}</span>
        <span className="text-xs font-normal text-gray-500">
          v{APP_VERSION}
        </span>
      </div>

      <div className="p-6 bg-gray-950">
        <PlayerHubBasic />
      </div>

      <div className="space-y-4 p-4">
        <h2 className="text-base font-semibold text-gray-200">
          What would you like to do?
        </h2>

        <ul className="space-y-3 text-sm">
          {menu.map((item, index) =>
            item.type === "item" ? (
              <ActionItem
                key={index}
                icon={item.icon}
                text={item.text}
                scene={item.scene}
              />
            ) : (
              <ActionGroupItems
                key={index}
                icon={item.icon}
                text={item.text}
                items={item.items as []}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}
