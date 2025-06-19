import type { ReactNode } from "react";

import type { UISizeType } from "@ui/theme";

type SceneLayoutProps = {
  title: string;
  subtitle?: string;
  isCentered?: boolean;
  backgroundImage?: string;
  children: ReactNode;
  size?: UISizeType;
};

const sizeMap: Record<UISizeType, string> = {
  small: "max-w-2xl",
  medium: "max-w-4xl",
  large: "max-w-full",
};

export default function SceneLayout({
  title,
  subtitle,
  isCentered = false,
  backgroundImage,
  children,
  size = "medium",
}: SceneLayoutProps) {
  return (
    <section
      className="w-full h-screen relative bg-gray-900 bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="w-full h-full flex items-center justify-center relative">
        <div
          className={`w-full ${sizeMap[size]} p-10 text-gray-200 space-y-8${
            isCentered ? " text-center" : ""
          }`}
        >
          <header className="mb-4">
            <h1 className="text-4xl font-extrabold text-yellow-400">{title}</h1>
            {subtitle && (
              <h2 className="text-base text-gray-400 leading-snug">
                {subtitle}
              </h2>
            )}
          </header>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
