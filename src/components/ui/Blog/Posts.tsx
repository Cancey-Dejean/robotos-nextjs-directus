"use client";

import { useState } from "react";

import { PostProps } from "@/types";
import CardBlog from "@/components/ui/Cards/CardBlog";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export default function Posts({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  // console.log(posts);

  return (
    <section className="container mx-auto grid grid-cols-1 justify-self-center px-5 py-28 md:py-32">
      <SectionTitle className="mb-8 text-center">Blogs</SectionTitle>

      <ul className="grid gap-8 lg:grid-cols-3">
        {posts?.length > 0 ? (
          posts.slice(0, loadMore).map((post) => (
            <li key={post.title}>
              <CardBlog {...post} className="h-full" />
            </li>
          ))
        ) : (
          <h2 className="text-red-500 p-4">No posts created</h2>
        )}
      </ul>

      {posts?.length > 3 && (
        <div className="mt-8 flex flex-col items-center justify-center gap-8">
          {loadMore < posts?.length ? (
            <Button onClick={showMoreArticles} variant="purple">
              Load More
            </Button>
          ) : (
            <p>No more articles.</p>
          )}

          {loadMore < posts?.length && (
            <p>
              Showing {loadMore} of {posts?.length} articles.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
