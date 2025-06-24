import type { ReactNode } from "react";

type BlockProps = {
  children: ReactNode;
  className?: string;
};

export default function Block({ children, className }: BlockProps) {
  return (
    <section
      className={`bg-black/40 p-4 rounded-lg border border-gray-700 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
