import SubscribeForm from "@/components/ui/Newsletter/SubscribeForm";
import Container from "@/components/ui/container";

export type NewsletterProps = {
  item: {
    headline?: string;
    desc?: string;
    btnLabel?: string;
  };
};

// export default function Newsletter({ item }: NewsletterProps) {
export default function Newsletter({ item }: NewsletterProps) {
  return (
    <section className="py-20">
      <Container>
        <SubscribeForm item={item} />
      </Container>
    </section>
  );
}
