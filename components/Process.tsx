import { FaLightbulb, FaPenNib, FaCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const STEPS = [
  { icon: FaLightbulb, title: 'Discover', desc: 'Goals, users, scope, success metrics.' },
  { icon: FaPenNib, title: 'Design', desc: 'Wireframes → polished UI with interactions.' },
  { icon: FaCode, title: 'Develop', desc: 'Accessible, performant, SEO‑ready code.' },
  { icon: FaRocket, title: 'Launch', desc: 'Deploy, monitor, iterate, and support.' },
];


export default function Process() {
  return (
    <motion.div
      id="process"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Our process</h2>
        <p className="text-gray-600 mt-3">A simple, transparent way to ship quality.</p>
      </motion.div>
      <motion.ol
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {STEPS.map((s, i) => (
          <motion.li
            key={s.title}
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #f38c1740' }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <s.icon className="text-3xl text-brand-600" />
            <h3 className="mt-4 font-semibold">{i+1}. {s.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  );
}
