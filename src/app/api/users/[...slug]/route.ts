import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    slug: string[]; // slug/slug/slug.... 하나의 슬러그가 아니라 중첩된 route 를 받을 수 있도록
  };
};

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;

  let request = getPostsOf;
  if (query == "saved") {
    request = getSavedPostsOf;
  } else if (query == "liked") {
    request = getLikedPostsOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
