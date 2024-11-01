import Image from "next/image";

import Availability from "@/components/ui/Availability";
import Container from "@/components/ui/container";
import SectionTitle from "../SectionTitle";
import { Button, ButtonProps } from "@/components/ui/Button";
import Link from "next/link";
import Card from "../Cards/Card";
import { HeadlineElement, ImageProps } from "@/types";

export default function GetRobots({
  item,
}: {
  item: {
    headline: string;
    headlineElement: HeadlineElement;
    bgImg: ImageProps;
    desc: string;
    topImage: ImageProps;
    btnLabel: string;
    btnUrl: string;
    btnVariant: ButtonProps["variant"];
    availability: boolean;
  };
}) {
  const {
    headline,
    headlineElement,
    bgImg,
    desc,
    topImage,
    btnLabel,
    btnUrl,
    btnVariant,
    availability,
  } = item;

  return (
    <section
      className="bg-yellow-200 bg-fixed pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url('${`${process.env.NEXT_PUBLIC_ASSETS_URL}${bgImg.filename_disk}?key=optimized`}')`,
      }}
    >
      <Container size="contained" className="flex justify-center">
        <Card className="items-center text-center md:px-14">
          {/* Image */}
          <div className="relative mx-auto -mt-[80px] mb-8 size-28 overflow-hidden rounded-full border-[5px] border-gray-900 md:size-[190px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${topImage.filename_disk}?key=optimized`}
              className="scale-[1.1]"
              alt={topImage.title || ""}
              fill
            />
          </div>

          {/* Card */}
          <div className="mb-6 flex flex-col gap-4">
            {headline && (
              <SectionTitle as={headlineElement || "h2"}>
                {headline}
              </SectionTitle>
            )}

            {desc && (
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: desc }}
              ></div>
            )}

            {btnLabel && (
              <Button variant={btnVariant} asChild>
                <Link href={btnUrl || "/"}>{btnLabel}</Link>
              </Button>
            )}
          </div>

          {/* Availability */}
          {availability && <Availability />}
        </Card>
      </Container>
    </section>
  );
}
