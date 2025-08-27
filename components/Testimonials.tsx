import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const QUOTES = [
  { name: 'A. Sharma', role: 'Founder, RetailCo', text: 'Smooth process and a gorgeous site. Performance is top‑notch.' },
  { name: 'R. Khan', role: 'CEO, FinLite', text: 'They delivered fast, and the SEO uplift was immediate.' },
  { name: 'S. Iyer', role: 'Director, HealthPlus', text: 'Great communication, clean design, measurable results.' },
];


export default function Testimonials() {
  return (
    <motion.div
      className="card p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } }
        }}
      >
        {QUOTES.map(q => (
          <motion.figure
            key={q.name}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px #f38c1740' }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FaQuoteLeft className="text-brand-600" />
            <blockquote className="mt-4 text-gray-700">{q.text}</blockquote>
            <figcaption className="mt-4 font-medium">{q.name} <span className="text-gray-500 font-normal">{q.role}</span></figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.div>
  );
}
