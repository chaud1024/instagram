"use client";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { ProfileUser } from "../model/user";
import GridSpinner from "./GridSpinner";

export default function UserSearch() {
  // /api/search/${keyword}
  // 검색하는 keyword가 있다면 /api/search/bob -> 유저네임이나, 네임
  // 검색하는 keyword가 없다면 /api/search -> 전체 유저 배열
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못되었음🙄</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없음 😫</p>
      )}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <p>{user.username}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
