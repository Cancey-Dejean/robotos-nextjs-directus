import React from "react";

import Link from "next/link";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/Button";

export default function PageNotFound({
  title = "404",
  message = "This page could not be found.",
  buttonText = "Go home",
  buttonUrl = "/",
}: {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonUrl?: string;
}) {
  return (
    <section className="flex h-full items-center justify-center">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p>{message}</p>

        <Button asChild className="no-underline">
          <Link href={buttonUrl}>{buttonText}</Link>
        </Button>
      </Container>
    </section>
  );
}
