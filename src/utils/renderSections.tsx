import GetRobots from "@/components/ui/GetRobots";
import HeroHome from "@/components/ui/Heroes/HeroHome";
import ImageStack from "@/components/ui/ImageStack";
import LatestPosts from "@/components/ui/LatestPosts";
import Stats from "@/components/ui/Stats";

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

    case "block_image_stack":
      // @ts-expect-error: No type for item
      return <ImageStack {...section} key={section.id} item={section.item} />;

    case "block_stats":
      // @ts-expect-error: No type for item
      return <Stats {...section} key={section.id} item={section.item} />;

    case "block_latest_posts":
      // @ts-expect-error: No type for item
      return <LatestPosts {...section} key={section.id} item={section.item} />;
  }
};
