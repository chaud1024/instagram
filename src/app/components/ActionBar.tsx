import { paresDate } from "@/util/date";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { SimplePost } from "../model/post";
import ToggleButton from "./ui/ToggleButton";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import usePosts from "../hooks/posts";

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post }: Props) {
  const { likes, username, text, createdAt, id } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user?.username) : false;
  // action bar 내부적으로 상태를 가진 것이 아니라
  // 외부에서 전달해주는 post의 상태가 변경이 될 때마다
  // likes안에 해당 로그인한 사용자가 있는 지 여부를 판단
  const [bookmarked, setBookmarked] = useState(false);
  const { setLike } = usePosts();
  // 내부적으로 like버튼을 클릭하면
  // route핸들러에게 like 처리 요청
  // 요청이 완료되면 home에서 사용하는 api post key를 가지고 있는
  // swr이 다시 캐시된 값을 revalidate하게 함
  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };
  return (
    <>
      <div className="flex justify-between my-2 px-4">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={setBookmarked}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <p>
            <span className="font-bold mr-1">{username}</span>
            {text}
          </p>
        )}
        <p className="text-xs text-neutral-500 uppercase my-4 text-right">
          {paresDate(createdAt)}
        </p>
      </div>
    </>
  );
}
