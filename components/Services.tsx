import { FaLaptopCode, FaBullhorn, FaSearch, FaPaintBrush } from 'react-icons/fa';

const FEATURES = [
  { icon: FaLaptopCode, title: 'Web Development', desc: 'Next.js sites with blazing performance and best practices.' },
  { icon: FaSearch, title: 'SEO & Performance', desc: 'Technical SEO, Core Web Vitals, and semantic markup.' },
  { icon: FaBullhorn, title: 'Digital Marketing', desc: 'Campaign-ready pages and analytics integrations.' },
  { icon: FaPaintBrush, title: 'Brand & UI', desc: 'Clean, modern design systems with Tailwind.' },
];

export default function Services(){
  return (
    <div id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <p className="text-gray-600 mt-3">Everything you need to launch and grow online.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="card p-6">
            <f.icon className="text-3xl text-brand-600" />
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
