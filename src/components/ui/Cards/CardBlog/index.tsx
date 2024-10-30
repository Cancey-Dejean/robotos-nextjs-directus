import React from "react";
import Card from "../Card";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Author } from "@/types/AuthorProps";
import { Link } from "next-view-transitions";

export default function CardBlog({
  className,
  featuredImg,
  featuredImgAlt,
  title,
  excerpt,
  buttonText,
  currentSlug,
  author,
}: {
  featuredImg?: string;
  featuredImgAlt?: string;
  title: string;
  excerpt?: string;
  buttonText?: string;
  currentSlug: string;
  className?: string;
  author?: Author;
}) {
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
            src={
              featuredImg || "https://dummyimage.com/200x200.png/eb0d18/ffffff"
            }
            alt={featuredImgAlt || "Card"}
            className="object-cover object-center"
            fill
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        {title && <h3 className="text-xl">{title}</h3>}

        {excerpt && <div className="line-clamp-2">{excerpt}</div>}
      </div>

      <div className="mt-auto flex w-full items-center justify-between gap-2">
        <Link
          href={`/blog/${currentSlug}`}
          className="after:absolute after:inset-0"
        >
          {buttonText || "Read More"} →
        </Link>

        {author?.authorImage && (
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
        )}
      </div>
    </Card>
  );
}
