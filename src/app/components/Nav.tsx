"use client";

import Link from "next/link";
import { kimjungchul } from "../font/typeFont";

import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Nav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="bg-white flex justify-between items-center px-6">
      <Link href="/">
        <h1 className={`text-3xl ${kimjungchul.className} font-bold`}>
          Instagram
        </h1>
      </Link>
      <ul className="flex gap-4 p-4 items-center">
        {menus.map((menu, idx) => (
          <li key={idx}>
            <Link href={menu.href}>
              {pathname === menu.href ? menu.clickedIcon : menu.icon}
            </Link>
          </li>
        ))}
        {session ? (
          <ColorButton text="Sign out" onClick={() => signOut()} />
        ) : (
          <ColorButton text="Sign in" onClick={() => signIn()} />
        )}
      </ul>
    </div>
  );
}

const menus = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
