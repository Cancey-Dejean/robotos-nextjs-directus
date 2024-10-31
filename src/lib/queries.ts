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
        "blocks.*",
        "blocks.item.*",
        "blocks.item.headlineElement.*",
        "blocks.item.image.*",
        "blocks.item.bgImg.*",
        "blocks.item.topImage.*",
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
