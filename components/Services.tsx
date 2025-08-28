"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBuilding,
  FaCogs,
  FaPlug,
  FaSyncAlt,
  FaBug,
  FaPaintBrush,
  FaShoppingCart,
  FaCloud,
  FaChartLine,
  FaTools,
  FaLifeRing,
  FaLightbulb
} from 'react-icons/fa';

const FEATURES = [
  { icon: FaLaptopCode, title: 'Custom Website Development', desc: 'Tailored websites built for your unique business needs.' },
  { icon: FaMobileAlt, title: 'Mobile App Development', desc: 'iOS & Android, native and cross-platform mobile solutions.' },
  { icon: FaBuilding, title: 'Enterprise Software Development', desc: 'Robust, scalable software for enterprise operations.' },
  { icon: FaCogs, title: 'Full-Stack Web App Development', desc: 'End-to-end web applications using modern stacks.' },
  { icon: FaPlug, title: 'API Development & Integration', desc: 'REST & GraphQL APIs, seamless third-party integrations.' },
  { icon: FaSyncAlt, title: 'App Modernization & Legacy Upgrades', desc: 'Upgrade and modernize legacy systems for today.' },
  { icon: FaBug, title: 'Bug Fixing & Optimization', desc: 'Debugging, performance tuning, and code fixes.' },
  { icon: FaPaintBrush, title: 'UI/UX Design & Optimization', desc: 'User-focused design and experience improvements.' },
  { icon: FaShoppingCart, title: 'E-Commerce Development', desc: 'Web and mobile stores for modern commerce.' },
  { icon: FaChartLine, title: 'SaaS Product Development', desc: 'Cloud-based SaaS solutions from idea to launch.' },
  { icon: FaCloud, title: 'Cloud-Based App Development', desc: 'Build and deploy scalable cloud applications.' },
  { icon: FaTools, title: 'Custom ERP & Business Solutions', desc: 'ERP, CRM, and business automation tailored for you.' },
  { icon: FaLifeRing, title: 'Maintenance & Support', desc: 'Ongoing technical support and maintenance services.' },
  { icon: FaLightbulb, title: 'Tech Consulting & Outsourcing', desc: 'Expert advice and project outsourcing for IT success.' },
];


type ServicesProps = { featuredOnly?: boolean };

export default function Services({ featuredOnly = false }: ServicesProps) {
  const displayFeatures = featuredOnly ? FEATURES.slice(0, 5) : FEATURES;
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, [displayFeatures.length]);

  return (
    <div id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
  <p className="text-gray-600 dark:text-gray-300 mt-3">Comprehensive IT solutions for every business need.</p>
      </div>
      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayFeatures.map((f) => (
          <motion.div
            key={f.title}
            className="card p-6 h-full flex flex-col items-start"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #f38c1740' }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <f.icon className="text-3xl text-brand-600" />
            <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-100">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
      {featuredOnly && (
        <div className="mt-8 text-center">
          <a href="/services" className="inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400">See All Services</a>
        </div>
      )}
    </div>
  );
}
