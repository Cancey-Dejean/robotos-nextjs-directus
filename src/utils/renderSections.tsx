import GetRobots from "@/components/ui/GetRobots";
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

    case "block_get_robots":
      // @ts-expect-error: No type for item
      return <GetRobots {...section} key={section.id} item={section.item} />;
  }
};
