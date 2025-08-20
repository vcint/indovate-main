import Section from "@/components/Section";
import Contact from "@/components/Contact";

export const metadata = { title: "Contact — Agency" };

export default function ContactPage(){
  return (
    <Section title="Contact" intro="Tell us about your project and we’ll get back within 24 hours.">
      <Contact />
    </Section>
  );
}
