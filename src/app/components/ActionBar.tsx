import { paresDate } from "@/util/date";
import React from "react";
import useMe from "../hooks/me";
import usePosts from "../hooks/posts";
import { SimplePost } from "../model/post";
import ToggleButton from "./ui/ToggleButton";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
};

export default function ActionBar({ post, children }: Props) {
  const { likes, createdAt, id } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user?.username) : false;

  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
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
          onToggle={handleBookmark}
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
