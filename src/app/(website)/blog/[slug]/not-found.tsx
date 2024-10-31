import PageNotFound from "@/components/ui/PageNotFound";

export default function NotFound() {
  return (
    <PageNotFound
      message="This post could not be found."
      buttonText="Go to posts"
      buttonUrl="/blog"
    />
  );
}
