"use client";
import usePosts from "../hooks/posts";
import GridSpinner from "./GridSpinner";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { posts, isLoading: loading } =
    // useSWR<SimplePost[]>("/api/posts");
    usePosts();
  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
