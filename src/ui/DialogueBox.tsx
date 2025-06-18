import React from "react";

import type { UiVariant } from "./defs/ui-variant.type";

interface DialogueBoxProps {
  avatar: string;
  name: string;
  messages: string[];
  type?: UiVariant;
  direction?: "left" | "right";
}

const typeColors: Record<UiVariant | "default", string> = {
  default: "gray",
  primary: "blue",
  warning: "yellow",
  danger: "red",
};

const DialogueBox: React.FC<DialogueBoxProps> = ({
  avatar,
  name,
  messages,
  type = "default",
  direction = "left",
}) => {
  const color = typeColors[type as UiVariant | "default"];

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-md shadow-md bg-black/50 ${
        direction === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <figure>
        <img
          src={avatar}
          alt="Avatar"
          className="w-20 aspect-square object-cover border-2 border-gray-400"
        />
      </figure>
      <div className="text-sm leading-snug">
        {messages.map((message, i) => (
          <div key={i} className="text-sm leading-snug space-y-1">
            {i === 0 ? (
              <>
                <div>
                  <strong className={`text-${color}-400`}>{name}:</strong>
                </div>
                <p>{message}</p>
              </>
            ) : (
              <p>{message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogueBox;
