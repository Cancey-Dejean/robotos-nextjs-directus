import React from "react";
import Card from "@/components/ui/Cards/Card";

// import Image from "next/image";
import { cn } from "@/lib/utils";
// import { Author } from "@/types/AuthorProps";
import Link from "next/link";
import { PostProps } from "@/types";
import Image from "next/image";

export default function CardBlog({
  className,
  title,
  slug,
  buttonLabel,
  featuredImg,
  seo,
}: {
  className?: string;
  buttonLabel?: string;
} & PostProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col items-start gap-5 p-4 md:p-5",
        className,
      )}
    >
      {featuredImg && (
        <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] lg:h-[200px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT}/assets/${featuredImg.filename_disk}`}
            alt={featuredImg.title || ""}
            className="object-cover object-center"
            fill
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        {title && <h3 className="font-rightGrotesk text-2xl">{title}</h3>}

        {seo?.meta_description && (
          <div className="line-clamp-2">{seo?.meta_description}</div>
        )}
      </div>

      <div className="mt-auto flex w-full items-center justify-between gap-2">
        <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
          {buttonLabel || "Read More"} →
        </Link>

        {/* {author?.authorImage && (
          <Image
            src={
              author?.authorImage ||
              "https://dummyimage.com/200x200.png/eb0d18/ffffff"
            }
            width={50}
            height={50}
            alt={author?.authorImageAlt || "Author"}
            className="scale-[1.1] rounded-full border border-black object-cover"
          />
        )} */}
      </div>
    </Card>
  );
}
