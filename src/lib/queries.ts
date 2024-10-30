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
        "blocks",
        "blocks.*",
        // "blocks.*.*.*",
        "blocks.item.*",
        "blocks.item.image.*",
      ],
    }),
  );
}

export async function getPosts() {
  return directus.request(
    readItems("posts", {
      fields: ["*", "featured_image.*"],
      sort: ["-date_created"],
    }),
  );
}
