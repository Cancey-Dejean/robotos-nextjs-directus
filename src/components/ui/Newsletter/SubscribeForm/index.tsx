"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewsletterProps } from "@/components/ui/Newsletter";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { directus } from "@/lib/directus";
import { createItem, readItems } from "@directus/sdk";

const subscribeFormSchema = z.object({
  email_address: z.string().email("Please enter a valid email address"),
});

export default function SubscribeForm({ item }: NewsletterProps) {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email_address: "",
    },
  });

  // TODO: In a real app, subscriber endpoint not be public
  async function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    try {
      const existingSubscriber = await directus.request(
        readItems("subscribers", {
          filter: {
            email_address: {
              _eq: values.email_address,
            },
          },
        }),
      );

      if (existingSubscriber && existingSubscriber.length > 0) {
        form.setError("email_address", {
          type: "manual",
          message: "This email is already subscribed",
        });
        return;
      }

      await directus.request(
        createItem("subscribers", {
          email_address: values.email_address,
        }),
      );

      toast.success(
        <div>
          <p className="text-gray-500 text-sm">
            Success! <span className="font-bold">{values.email_address}</span>{" "}
            has been added to our newsletter.
          </p>
        </div>,
      );

      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    }
  }

  const { headline, desc, btnLabel } = item;

  return (
    <div>
      <div className="mb-6 text-center">
        <SectionTitle as="h2" className="mb-4" size="medium">
          {headline}
        </SectionTitle>

        {desc && <div dangerouslySetInnerHTML={{ __html: desc }}></div>}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-full max-w-lg flex-col items-stretch gap-4"
        >
          <FormField
            control={form.control}
            name="email_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only font-rightGrotesk">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    {...field}
                    className="min-h-[88px] text-2xl"
                  />
                </FormControl>
                <FormMessage className="!mt-4 block text-lg dark:text-white" />
              </FormItem>
            )}
          />

          <Button type="submit">{btnLabel || "Subscribe"}</Button>
        </form>
      </Form>
    </div>
  );
}
