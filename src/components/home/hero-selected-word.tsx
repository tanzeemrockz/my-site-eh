"use client";

import React from "react";

const HANDLES = [
  "-top-1 -left-1",
  "-top-1 -right-1",
  "-bottom-1 -left-1",
  "-bottom-1 -right-1",
];

export function SelectedWord({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
  label?: string;
}) {
  return (
    <span className="relative inline-block mx-1.5 px-3 py-0.5 rounded-md border border-accent-orange/40 bg-accent-orange/[0.08] text-white align-baseline">
      {/* Corner designer handles giving the creative studio collaborator aesthetic */}
      {HANDLES.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute size-2 rounded-[2px] border border-accent-orange bg-white shadow-[0_0_6px_rgba(239,107,57,0.5)] ${pos}`}
        />
      ))}

      {/* Selected word content */}
      <span className="relative z-10 inline-block font-semibold">
        {children}
      </span>
    </span>
  );
}
