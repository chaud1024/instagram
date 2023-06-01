import React from "react";

type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 py-0.5 px-0.5 w-9 h-9">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="user profile"
        className="rounded-full p-[0.1rem]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
