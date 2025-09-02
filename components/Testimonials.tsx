import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const QUOTES = [
  { name: 'Faizel L.', role: 'Founder, Apisec', text: 'Smooth process and a gorgeous site. Performance is top‑notch.' },
  { name: 'Thalraj G.', role: 'MD, Artificio', text: 'They delivered fast, and the SEO uplift was immediate.' },
  { name: 'Hamza Betraoui', role: 'Founder & CEO, Belsio', text: 'Great communication, clean design, measurable results.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4, // delay after title
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 18 } }
};

export default function Testimonials() {
  return (
    <motion.div
      className="card p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        What Our Clients Are Saying
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {QUOTES.map(q => (
          <motion.figure
            key={q.name}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-start"
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px #f38c1740' }}
          >
            <FaQuoteLeft className="text-brand-600" />
            <blockquote className="mt-4 text-gray-700 dark:text-gray-100">{q.text}</blockquote>
            <figcaption className="mt-4 font-medium text-gray-900 dark:text-gray-200">{q.name} <span className="text-gray-500 dark:text-gray-400 font-normal">{q.role}</span></figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.div>
  );
}