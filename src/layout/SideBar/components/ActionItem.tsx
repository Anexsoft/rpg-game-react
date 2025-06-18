import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type ActionItemProps = {
  path: string;
  icon: LucideIcon;
  text: string;
};

export default function ActionItem({
  path,
  icon: Icon,
  text,
}: ActionItemProps) {
  return (
    <li>
      <NavLink
        to={path}
        className="bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
      >
        <Icon className="w-4 h-4" />
        {text}
      </NavLink>
    </li>
  );
}
