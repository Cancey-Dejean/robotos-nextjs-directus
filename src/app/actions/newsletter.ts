"use server";

import { directus } from "@/lib/directus";
import { createItem } from "@directus/sdk";

export async function subscribeToNewsletter(email_address: string) {
  try {
    await directus.request(
      createItem("subscribers", {
        email_address,
      }),
    );
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}
