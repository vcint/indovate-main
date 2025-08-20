import { FaQuoteLeft } from 'react-icons/fa';

const QUOTES = [
  { name: 'A. Sharma', role: 'Founder, RetailCo', text: 'Smooth process and a gorgeous site. Performance is top‑notch.' },
  { name: 'R. Khan', role: 'CEO, FinLite', text: 'They delivered fast, and the SEO uplift was immediate.' },
  { name: 'S. Iyer', role: 'Director, HealthPlus', text: 'Great communication, clean design, measurable results.' },
];

export default function Testimonials(){
  return (
    <div className="card p-8">
      <div className="grid md:grid-cols-3 gap-8">
        {QUOTES.map(q => (
          <figure key={q.name}>
            <FaQuoteLeft className="text-brand-600" />
            <blockquote className="mt-4 text-gray-700">{q.text}</blockquote>
            <figcaption className="mt-4 font-medium">{q.name} <span className="text-gray-500 font-normal">— {q.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
