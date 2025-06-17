import type { ReactNode } from "react";

type SceneLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function SceneLayout({
  title,
  subtitle,
  children,
}: SceneLayoutProps) {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl p-10 text-gray-200 space-y-8 text-center">
        <header className="space-y-2">
          <h1 className="text-4xl font-extrabold text-yellow-400">{title}</h1>
          {subtitle && (
            <h2 className="text-base text-gray-400 leading-snug">{subtitle}</h2>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
