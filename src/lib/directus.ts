import { createDirectus, rest } from "@directus/sdk";

// Client with REST support
export const directus = createDirectus(
  String(process.env.NEXT_PUBLIC_SITE_URL),
).with(rest());
