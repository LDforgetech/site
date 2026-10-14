import type React from "react";

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group bg-white/10 pattern-stripes text-black inline-flex rounded p-1">
      <button
        {...props}
        className=" relative overflow-hidden text-base font-sans bg-linear-to-t from-purple to-violet m-0 px-3 py-2.5 rounded ring-2 ring-inset ring-white/40 block"
      >
        <div className="absolute inset-0 pattern-stripes text-black/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>

        <div className="relative z-10 text-white font-medium flex gap-2 items-center">
          {children}
        </div>
      </button>
    </div>
  );
}
