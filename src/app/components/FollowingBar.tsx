"use client";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ScrollableBar";
import useMe from "../hooks/me";

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  // console.log(data?.following);

  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following.`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="w-20 flex flex-col items-center">
              <Avatar image={image} highlight />
              <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
