import HeroHome from "@/components/ui/Heroes/HeroHome";

type Section = {
  collection: string;
  id: string;
};

export const RenderSections = (section: Section) => {
  switch (section.collection) {
    case "block_home_hero":
      // @ts-expect-error: No type for item
      return <HeroHome {...section} key={section.id} item={section.item} />;
  }
};
