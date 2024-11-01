import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getFooter } from "@/lib/queries";

export default async function Footer() {
  const footer = await getFooter();

  const { titleLineOne, titleLineTwo, btnLabel, btnUrl, content } = footer;

  return (
    <footer id="footer" className="bg-gray-900 px-5 py-10 text-center md:py-20">
      <h2 className="mb-10 flex flex-col text-[16vw] uppercase leading-[.8] text-white lg:mb-14 [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out">
        <span className="hover:text-yellow-100">{titleLineOne}</span>

        {titleLineTwo && (
          <span className="hover:text-purple-100">{titleLineTwo}</span>
        )}
      </h2>

      {btnLabel && (
        <Button asChild variant="purple" className="mb-6 mt-4">
          <Link href={btnUrl}>{btnLabel}</Link>
        </Button>
      )}

      {content && (
        <div
          className="mx-auto max-w-[400px] text-white [&_a]:text-white [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </footer>
  );
}
