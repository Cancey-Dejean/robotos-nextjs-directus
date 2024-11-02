import Image from "next/image";
import Card from "../Card";

export default function CardSimple({
  mainImage,
  mainImageAlt,
  title,
}: {
  mainImage: string;
  mainImageAlt: string;
  title: string;
}) {
  return (
    <Card className="p-4 md:p-4">
      <Image
        width={494}
        height={494}
        src={mainImage}
        alt={mainImageAlt || "Card Image"}
        className="rounded-[20px]"
      />

      <h3 className="mt-4 text-center uppercase">{title}</h3>
    </Card>
  );
}
