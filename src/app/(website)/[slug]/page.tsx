import Container from "@/components/ui/container";
import { getPages } from "@/lib/queries";

import { RenderSections } from "@/utils/renderSections";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map(({ slug }) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "home";

  const page = await getPages().then((pages) =>
    pages.find((page) => page.slug === slug),
  );

  if (!page) {
    notFound();
  }

  const sections = page.blocks;

  // console.log(sections[5]);

  return (
    <>
      {page.content && (
        <section>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
          </Container>
        </section>
      )}

      {!page.content && sections.length < 1 && (
        <section className="flex h-full items-center justify-center">
          <Container className="text-red-500 text-center text-5xl font-bold">
            Please add some sections to this page
          </Container>
        </section>
      )}

      {sections && sections.map(RenderSections)}
    </>
  );
}
