import { Check, AlertTriangle, AlertOctagon } from "lucide-react";

import Block from "./Block";

export type NotificationBoxType = "success" | "warning" | "danger" | "default";

type NotificationBoxProps = {
  children: string;
  type?: NotificationBoxType;
};

export default function NotificationBox({
  children,
  type = "default",
}: NotificationBoxProps) {
  const base =
    "px-6 py-3 rounded-lg text-sm font-semibold text-white text-center flex items-center justify-center gap-2";

  const color =
    type === "success"
      ? "bg-green-600/50 border border-green-400 text-green-200"
      : type === "warning"
        ? "bg-yellow-600/50 border border-yellow-400 text-yellow-200"
        : type === "danger"
          ? "bg-red-600/50 border border-red-400 text-red-200"
          : "bg-gray-900/50 border border-gray-500 text-gray-200";

  const icon =
    type === "success" ? (
      <Check className="w-4 h-4" />
    ) : type === "warning" ? (
      <AlertTriangle className="w-4 h-4" />
    ) : type === "danger" ? (
      <AlertOctagon className="w-4 h-4" />
    ) : null;

  return (
    <Block className={`${base} ${color}`}>
      {icon}
      {children}
    </Block>
  );
}
