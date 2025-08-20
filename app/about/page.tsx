import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "About — Agency" };

export default function AboutPage(){
  return (
    <Section title="About Us" intro="We are a small, focused team building fast, reliable web experiences.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Our Mission</h3>
          <p className="text-gray-600 mt-2">Deliver measurable business impact through design, performance, and SEO‑driven development.</p>
        </div>
        <div className="relative aspect-[4/3] card overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" alt="Team" fill className="object-cover" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {['Design', 'Engineering', 'Growth'].map((k) => (
          <div key={k} className="card p-6">
            <h4 className="font-semibold">{k}</h4>
            <p className="text-gray-600 mt-2">Experienced specialists collaborating with transparent processes.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
