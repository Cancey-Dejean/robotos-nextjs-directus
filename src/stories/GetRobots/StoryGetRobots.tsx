import Image from "next/image";

import Availability from "@/components/ui/Availability";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button, ButtonProps } from "@/components/ui/Button";
import Link from "next/link";
import Card from "@/components/ui/Cards/Card";
import { HeadlineElement } from "@/types";

export default function GetRobots({
  headline,
  headlineElement,
  bgImg,
  desc,
  topImage,
  btnLabel,
  btnUrl,
  btnVariant,
  availability,
}: {
  headline?: string;
  headlineElement?: HeadlineElement;
  bgImg?: string;
  desc?: string;
  topImage: string;
  btnLabel?: string;
  btnUrl?: string;
  btnVariant?: ButtonProps["variant"];
  availability?: boolean;
}) {
  return (
    <section
      className="bg-yellow-200 bg-fixed pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >
      <Container className="flex justify-center">
        <Card className="items-center text-center md:px-14">
          {/* Image */}
          <div className="relative mx-auto -mt-[80px] mb-8 size-28 overflow-hidden rounded-full border-[5px] border-gray-900 md:size-[190px]">
            <Image
              src={topImage}
              className="scale-[1.1]"
              alt={"Top Image"}
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
