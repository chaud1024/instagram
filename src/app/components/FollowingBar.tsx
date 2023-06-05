"use client";
import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR("/api/hello");
  console.log(data);
  // 1. 클라이언트 컴포넌트에서 백엔드(서버)에게 api/me 를 통해 사용자의 정보 얻음
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용하여
  // 3. 백엔드에서 사용자의 상세정보를 Sanity에서 가져옴(followings)
  // 4. 여기(클라이언트컴포넌트)에서 followings의 정보를 ui에 보여줌
  return <div>FollowingBar</div>;
}
