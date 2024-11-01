import { readItems, readSingleton } from "@directus/sdk";
import { directus } from "./directus";

export async function getGlobalSettings() {
  return directus.request(
    readItems("global", {
      fields: ["*"],
    }),
  );
}

export async function getHeader() {
  return directus.request(
    readSingleton("header", {
      fields: ["*", "logo.*", "menu.*"],
    }),
  );
}

export async function getFooter() {
  return directus.request(
    readSingleton("footer", {
      fields: ["*"],
    }),
  );
}

export async function getPages() {
  return directus.request(
    readItems("pages", {
      fields: [
        "*",
        {
          seo: [
            "title",
            "meta_description",
            "canonical_url",
            "no_index",
            "no_follow",
            "og_image.filename_disk",
            "sitemap_change_frequency",
            "sitemap_priority",
          ],
        },
        {
          blocks: [
            "*",
            {
              item: {
                block_home_hero: ["*"],
                block_get_robots: ["*", "bgImg.*", "topImage.*"],
                block_image_stack: ["*", "image.*"],
                block_stats: ["*", "bgImg.*", "image.*"],
                block_latest_posts: ["*"],
                block_faq: ["*", "faqs.faqs_id.*", "faqs.faqs_id.image.*"],
              },
            },
          ],
        },
        // "blocks.*",
        // "blocks.item.*",
        // "blocks.item.headlineElement.*",
        // "blocks.item.image.*",
        // "blocks.item.bgImg.*",
        // "blocks.item.topImage.*",
        // "blocks.item.faqs.faqs_id.*",
      ],
    }),
  );
}

export async function getPosts() {
  return directus.request(
    readItems("posts", {
      fields: [
        "date_created",
        "date_updated",
        "title",
        "slug",
        "content",
        "featuredImg.filename_disk",
        {
          seo: [
            "title",
            "meta_description",
            "canonical_url",
            "no_index",
            "no_follow",
            "og_image.filename_disk",
            "sitemap_change_frequency",
            "sitemap_priority",
          ],
        },
      ],
      sort: ["-date_created"],
    }),
  );
}
