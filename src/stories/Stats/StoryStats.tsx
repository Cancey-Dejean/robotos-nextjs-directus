import Image from "next/image";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Cards/Card";

export const types = [
  {
    title: "Types",
    items: [
      {
        boldText: "9,999",
        title: "Total Robots",
      },
      {
        boldText: "Common",
        title: "Robotos",
      },
      {
        boldText: "Less Common",
        title: "Helmetos",
      },
      {
        boldText: "Rare",
        title: "Computos",
      },
      {
        boldText: "Super Rare",
        title: "Cyborgos",
      },
    ],
  },
];

export const variations = [
  {
    title: "Variations",
    items: [
      {
        boldText: "38",
        title: "Head Tops",
      },
      {
        boldText: "32",
        title: "Eyes",
      },
      {
        boldText: "18",
        title: "Helmets",
      },
      {
        boldText: "16",
        title: "Mouth",
      },
      {
        boldText: "18",
        title: "Ears",
      },
      {
        boldText: "12",
        title: "Arms",
      },
      {
        boldText: "10",
        title: "Chassis Colors",
      },
      {
        boldText: "9",
        title: "Backpacks",
      },
      {
        boldText: "6",
        title: "Computo Heads",
      },
      {
        boldText: "6",
        title: "Chest Screens",
      },
      {
        boldText: "5",
        title: "Bodies",
      },
      {
        boldText: "4",
        title: "Head Types",
      },
      {
        boldText: "4",
        title: "Human Faces",
      },
    ],
  },
];

export default function Stats({
  headline,
  bgImg,
  desc,
  image,
}: {
  headline?: string;
  bgImg?: string;
  desc?: string;
  image?: string;
}) {
  return (
    <section
      className="border-[16px] border-gray-900 bg-blue-300 bg-cover bg-fixed bg-center py-0 md:py-32"
      id="rarity"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >
      <Container>
        <Card className="mx-auto flex max-w-[740px] flex-col items-start gap-5 max-sm:rounded-none">
          <div className="flex flex-col gap-2">
            {headline && <SectionTitle>{headline}</SectionTitle>}

            {desc && <div dangerouslySetInnerHTML={{ __html: desc }}></div>}
          </div>

          <div className="flex w-full items-stretch gap-6">
            {types.map(({ title, items }, index) => (
              <div className="flex-1" key={index}>
                {title && <p className="mb-3 font-rightGrotesk">{title}</p>}

                {items && (
                  <div className="flex h-full flex-col gap-2">
                    {items?.map(({ boldText, title }, index) => (
                      <Statbar key={index} boldText={boldText} title={title} />
                    ))}

                    {image && (
                      <div className="hidden h-full items-center justify-center md:flex">
                        <div className="relative h-[270px] w-[318px]">
                          <Image src={image} alt="Main Image" fill />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {variations.map(({ title, items }, index) => (
              <div className="flex-1" key={index}>
                {title && <h3 className="mb-3">{title}</h3>}

                {items && (
                  <div className="flex h-full flex-col gap-2">
                    {items?.map(({ boldText, title }, index) => (
                      <Statbar key={index} boldText={boldText} title={title} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}

const Statbar = ({ boldText, title }: { boldText: string; title: string }) => {
  return (
    <div
      key={`item-${title}`}
      className="grid grid-cols-2 items-start rounded p-2 odd:bg-blue-50"
    >
      {boldText && <p className="font-bold">{boldText}</p>}

      {title && <p>{title}</p>}
    </div>
  );
};
