import Image from "next/image";
import Container from "@/components/ui/container";
import { format } from "date-fns";
import { dateFormat } from "@/constants";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/queries";
import Card from "@/components/ui/Cards/Card";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await getPosts().then((posts) =>
    posts.find((post) => post.slug === slug),
  );

  if (!post) {
    notFound();
  }

  const { title, date_created, date_updated, content, featuredImg, seo } = post;

  return (
    <section
      className="h-full bg-yellow-200 bg-fixed px-5 pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url("/images/get-robots-bg.png")`,
      }}
    >
      <Container>
        <Card>
          <article className="prose mx-auto max-w-3xl py-10 md:py-20">
            <h1 className="text-xl sm:text-4xl">{title}</h1>

            {seo?.meta_description && <p>{seo?.meta_description}</p>}

            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              {/* <div className="relative flex items-center gap-2">
                <Link
                  href={`/blog/author/${authorSlug}`}
                  className="after:absolute after:inset-0"
                >
                  <Image
                    src={authorImage}
                    alt={name}
                    height={50}
                    width={50}
                    className="m-0 rounded-full border border-black"
                  />
                </Link>

                <p className="m-0">{name ? <strong>{name}</strong> : null}</p>
              </div> */}

              <div className="flex flex-col">
                {date_updated > date_created ? (
                  <div>{format(date_updated, dateFormat)}</div>
                ) : (
                  <div>{format(date_created, dateFormat)}</div>
                )}
              </div>
            </div>

            <Image
              src={
                `${process.env.NEXT_PUBLIC_ASSETS_URL}${featuredImg.filename_disk}?key=optimized` ||
                "https://dummyimage.com/560x400.png/22c55e/ffffff"
              }
              alt={title}
              width={1000}
              height={500}
            />

            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </article>
        </Card>
      </Container>
    </section>
  );
}
