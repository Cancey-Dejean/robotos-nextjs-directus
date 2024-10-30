import { createDirectus, rest } from "@directus/sdk";

// Client with REST support
export const directus = createDirectus(
  String(process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT),
).with(rest());
