import React from "react";
type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 py-0.5 px-0.5">
      <span className="bg-white inline-block py-0.5 px-1.5 rounded-md line hover:opacity-80 transition-opacity">
        {text}
      </span>
    </button>
  );
}
