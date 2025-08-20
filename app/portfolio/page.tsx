import Section from "@/components/Section";
import Portfolio from "@/components/Portfolio";

export const metadata = { title: "Portfolio — Agency" };

export default function PortfolioPage(){
  return (
    <Section title="Portfolio" intro="Hand‑picked projects that show our range.">
      <Portfolio />
    </Section>
  );
}
