import React from "react";
type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 py-0.5 px-0.5
        ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}
      `}>
      <span
        className={`bg-white inline-block rounded-md line hover:opacity-80 transition-opacity
          ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}
        `}>
        {text}
      </span>
    </button>
  );
}
