import Posts from "@/components/ui/Blog/Posts";
import { getPosts } from "@/lib/queries";
import { PostProps } from "@/types";

export default async function BlogIndex() {
  const posts = await getPosts();

  return <Posts posts={posts as PostProps[]} />;
}
