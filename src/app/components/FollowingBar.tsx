"use client";
import useSWR from "swr";
import { DetailUser } from "../model/user";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import Avatar from "./Avatar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  // console.log(data?.following);

  const users = data?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following.`}</p>
      )}
      {users && users.length > 0 && (
        <ul className="w-full flex gap-2">
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link
                href={`/user/${username}`}
                className="w-20 flex flex-col items-center">
                <Avatar image={image} hightlight />
                <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
