import { APP_NAME, APP_VERSION } from "@core/config/index";

import backgroundImage from "@resources/images/sidebar/background.png";

import PlayerHubBasic from "@player/components/PlayerHubBasic";

import ActionGroupItems from "./components/ActionGroupItems";
import ActionItem from "./components/ActionItem";
import { menu } from "./defs";

export default function SideBar() {
  return (
    <div
      className="h-full text-white flex flex-col border-r-1 border-gray-950 shadow-lg shadow-black/40"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black p-4 flex items-center justify-between text-white font-bold text-lg">
        <span>{APP_NAME}</span>
        <span className="text-xs font-normal text-gray-500">
          v{APP_VERSION}
        </span>
      </div>

      <div className="flex-1 bg-black/40 flex flex-col overflow-y-auto">
        <div className="p-6">
          <PlayerHubBasic />
        </div>

        <div className="p-4 flex-1">
          <h2 className="text-base font-semibold text-gray-200 mb-4">
            What would you like to do?
          </h2>

          <ul className="space-y-3 text-sm">
            {menu.map((item, index) =>
              item.type === "item" ? (
                <ActionItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  path={item.path as string}
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
      </div>
    </div>
  );
}
