import Section from "@/components/Section";
import Services from "@/components/Services";

export const metadata = { title: "Services — Agency" };

export default function ServicesPage() {
  return (
    <Section title="Services" intro="Everything you need to launch and grow online.">
      <Services />
    </Section>
  );
}
