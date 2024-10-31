import { getPosts } from "@/lib/queries";
import CardBlog from "@/components/ui/Cards/CardBlog";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/SectionTitle";

type LatestPostsProps = {
  item: {
    heading?: string;
  };
};

export default async function LatestPosts({ item }: LatestPostsProps) {
  const posts = await getPosts();

  const { heading } = item;
  return (
    <section className="bg-white py-16 md:py-32">
      <Container>
        <SectionTitle as={"h2"} className="mb-5">
          {heading}
        </SectionTitle>

        {posts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <div key={post.title}>
                <CardBlog {...post} className="h-full" />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
