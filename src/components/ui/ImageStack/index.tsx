import Image from "next/image";

export const rowImages = [
  {
    src: "/images/ImageRow1.png",
    alt: "",
  },
  {
    src: "/images/ImageRow2.png",
    alt: "",
  },
  {
    src: "/images/ImageRow3.png",
    alt: "",
  },
];
export default function ImageStack({ title }: { title?: string }) {
  return (
    <section className="bg-gray-900 p-0">
      <span className="sr-only">{title}</span>
      <div className="flex flex-col md:-space-y-[160px]">
        {rowImages.map(({ src, alt }, index) => (
          <div
            className="relative -mt-[40px] h-[100px] w-full sm:h-[250px] md:h-[550px] first:md:-mt-[100px]"
            key={index}
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
