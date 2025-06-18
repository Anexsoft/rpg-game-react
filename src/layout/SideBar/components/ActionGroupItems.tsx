import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type SubItem = {
  text: string;
  path: string;
};

type ActionItemProps = {
  icon: LucideIcon;
  text: string;
  items: SubItem[];
};

export default function ActionGroupItems({
  icon: Icon,
  text,
  items,
}: ActionItemProps) {
  return (
    <ul className="text-sm text-gray-300 space-y-2">
      <li className="flex items-center gap-2 px-4 py-2 rounded bg-black/40 text-white cursor-pointer select-none hover:bg-black/60">
        <Icon className="w-4 h-4" />
        <span className="flex-1">{text}</span>
      </li>
      <li>
        <ul className="ml-4 border-l border-dashed border-gray-500 space-y-1">
          {items.map(({ path, text }, index) => (
            <li>
              <NavLink
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded bg-black/40 text-sm border-b border-dashed border-gray-500 cursor-pointer hover:bg-black/60 hover:text-gray-50 last:border-b-0"
                to={path}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
