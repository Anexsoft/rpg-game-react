import React from "react";

import { X } from "lucide-react";

interface ModalCardProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "max-w-md",
  medium: "max-w-4xl",
  large: "max-w-6xl",
};

const ModalCard: React.FC<ModalCardProps> = ({
  onClose,
  children,
  title,
  size = "medium",
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div
        className={`relative rounded-xl shadow-2xl w-full ${sizeClasses[size]}`}
      >
        <header className="bg-gray-950 p-4 rounded-t-xl flex items-start justify-between">
          <h1 className="text-md font-bold">{title}</h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </header>
        <div className="bg-gray-900 p-6 rounded-b-xl">{children}</div>
      </div>
    </div>
  );
};

export default ModalCard;
