import { FaLightbulb, FaPenNib, FaCode, FaRocket } from 'react-icons/fa';

const STEPS = [
  { icon: FaLightbulb, title: 'Discover', desc: 'Goals, users, scope, success metrics.' },
  { icon: FaPenNib, title: 'Design', desc: 'Wireframes → polished UI with interactions.' },
  { icon: FaCode, title: 'Develop', desc: 'Accessible, performant, SEO‑ready code.' },
  { icon: FaRocket, title: 'Launch', desc: 'Deploy, monitor, iterate, and support.' },
];

export default function Process(){
  return (
    <div id="process">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our process</h2>
        <p className="text-gray-600 mt-3">A simple, transparent way to ship quality.</p>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card p-6">
            <s.icon className="text-3xl text-brand-600" />
            <h3 className="mt-4 font-semibold">{i+1}. {s.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
