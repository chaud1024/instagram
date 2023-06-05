import React from "react";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  hightlight?: boolean;
};

export default function Avatar({
  image,
  size = "normal",
  hightlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, hightlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="user profile"
        className={`rounded-full bg-white ${getImageSizeStyle(size)}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, hightlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center"; //  py-0.5 px-0.5 '
  const hightlightStyle = hightlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[66px] h-[66px]";
  return `${baseStyle} ${hightlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[34px] h-[34px]  p-[0.1rem]"
    : "w-16 h-16  p-[0.2rem]";
}
