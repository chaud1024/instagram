"use client";
import { useState } from "react";
import useSWR from "swr";
import { ProfileUser } from "../model/user";

type Props = {
  user: ProfileUser;
};
export default function UserPosts({ user: { username } }: Props) {
  // /api/users/${username}/posts
  // /api/users/${username}/liked
  // /api/users/${username}/bookmarks
  const [tab, setTab] = useState("liked");
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log(posts);

  return <div>UserPosts</div>;
}
