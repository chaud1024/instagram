import localFont from "next/font/local";

export const suit = localFont({
  src: "./SUIT-Variable.woff2",
});

export const kimjungchul = localFont({
  src: [
    {
      path: "./kimjungchulMyungjo-Bold.ttf",
      weight: "600",
    },
    {
      path: "./kimjungchulMyungjo-Regular.ttf",
      weight: "400",
    },
    {
      path: "./kimjungchulMyungjo-Light.ttf",
      weight: "200",
    },
  ],
});
