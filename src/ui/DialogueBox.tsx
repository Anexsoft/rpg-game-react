import React from "react";

interface DialogueBoxProps {
  avatar: string;
  name: string;
  messages: string[];
  direction?: "left" | "right";
}

const DialogueBox: React.FC<DialogueBoxProps> = ({
  avatar,
  name,
  messages,
  direction = "left",
}) => {
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
          className="w-24 aspect-square rounded object-cover border-1 border-gray-400"
        />
      </figure>
      <div className="text-sm leading-snug">
        {messages.map((message, i) => (
          <div key={i} className="text-sm leading-snug space-y-1">
            {i === 0 ? (
              <>
                <div>
                  <strong className={`text-gray-400`}>{name}:</strong>
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
