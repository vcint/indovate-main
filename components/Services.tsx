"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  {
    icon: FaLaptopCode,
    title: 'Custom Website Development',
    desc: 'Tailored websites built for your unique business needs.',
    details:
      'We create high-performance, scalable, and visually stunning websites tailored to your brand and business goals. Our team leverages the latest technologies and best practices to ensure your site is fast, secure, and optimized for conversions.',
    stacks: ['React.js', 'Next.js', 'Angular', 'Node.js', 'Django', 'Flask']
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    desc: 'iOS & Android, native and cross-platform mobile solutions.',
    details:
      'From concept to launch, we build robust mobile apps for iOS and Android. Our expertise covers both native and cross-platform solutions, ensuring seamless user experiences and high performance on all devices.',
    stacks: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    icon: FaBuilding,
    title: 'Enterprise Software Development',
    desc: 'Robust, scalable software for enterprise operations.',
    details:
      'We deliver enterprise-grade software solutions that streamline operations, boost productivity, and scale with your business. Our custom platforms are secure, reliable, and tailored to your unique requirements.',
    stacks: ['Java', '.NET', 'Spring Boot', 'Node.js', 'Python']
  },
  {
    icon: FaCogs,
    title: 'Full-Stack Web App Development',
    desc: 'End-to-end web applications using modern stacks.',
    details:
      'Our full-stack development team builds powerful web applications using the latest frameworks and technologies. We handle everything from frontend UI/UX to backend APIs and databases.',
    stacks: ['MERN Stack', 'MEAN Stack', 'Django + React', 'Flask + Angular']
  },
  {
    icon: FaPlug,
    title: 'API Development & Integration',
    desc: 'REST & GraphQL APIs, seamless third-party integrations.',
    details:
      'We design and implement robust REST and GraphQL APIs, and integrate your systems with third-party services for enhanced functionality and automation.',
    stacks: ['Node.js', 'Express', 'GraphQL', 'Django REST', 'Flask APIs']
  },
  {
    icon: FaSyncAlt,
    title: 'App Modernization & Legacy Upgrades',
    desc: 'Upgrade and modernize legacy systems for today.',
    details:
      'We help you modernize outdated applications, migrate to new platforms, and upgrade legacy systems for improved performance, security, and maintainability.',
    stacks: ['.NET Core', 'Java Spring', 'Python', 'Cloud Migration']
  },
  {
    icon: FaBug,
    title: 'Bug Fixing & Optimization',
    desc: 'Debugging, performance tuning, and code fixes.',
    details:
      'Our experts quickly identify and resolve bugs, optimize code, and enhance the performance and stability of your applications.',
    stacks: ['JavaScript', 'Python', 'Java', 'C#', 'SQL Optimization']
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design & Optimization',
    desc: 'User-focused design and experience improvements.',
    details:
      'We craft intuitive, engaging, and accessible user interfaces that delight users and drive results. Our design process is rooted in research and best practices.',
    stacks: ['Figma', 'Adobe XD', 'TailwindCSS', 'Bootstrap']
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Development',
    desc: 'Web and mobile stores for modern commerce.',
    details:
      'We build secure, scalable, and feature-rich e-commerce platforms for web and mobile, tailored to your business model and customer needs.',
    stacks: ['Shopify', 'WooCommerce', 'Magento', 'Next.js Commerce', 'Custom Node.js']
  },
  {
    icon: FaChartLine,
    title: 'SaaS Product Development',
    desc: 'Cloud-based SaaS solutions from idea to launch.',
    details:
      'From MVP to full-scale SaaS products, we handle the entire development lifecycle, ensuring your solution is robust, scalable, and ready for growth.',
    stacks: ['React.js', 'Next.js', 'Node.js', 'Django', 'AWS']
  },
  {
    icon: FaCloud,
    title: 'Cloud-Based App Development',
    desc: 'Build and deploy scalable cloud applications.',
    details:
      'We architect, build, and deploy cloud-native applications that leverage the power and flexibility of modern cloud platforms.',
    stacks: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    icon: FaTools,
    title: 'Custom ERP & Business Solutions',
    desc: 'ERP, CRM, and business automation tailored for you.',
    details:
      'We develop custom ERP, CRM, and business automation solutions that streamline your workflows and drive efficiency.',
    stacks: ['Odoo', 'SAP', 'Dynamics 365', 'Custom Node.js + React']
  },
  {
    icon: FaLifeRing,
    title: 'Maintenance & Support',
    desc: 'Ongoing technical support and maintenance services.',
    details:
      'Our team provides reliable, ongoing support and maintenance to keep your systems running smoothly and securely.',
    stacks: ['24/7 Monitoring', 'Security Patching', 'Performance Audits']
  },
  {
    icon: FaLightbulb,
    title: 'Tech Consulting & Outsourcing',
    desc: 'Expert advice and project outsourcing for IT success.',
    details:
      'We offer expert IT consulting and project outsourcing to help you make informed decisions and achieve your technology goals.',
    stacks: ['Agile Consulting', 'Team Augmentation', 'Architecture Review']
  }
];

const modalVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.25 } }
};

type ServicesProps = { featuredOnly?: boolean };

export default function Services({ featuredOnly = false }: ServicesProps) {
  const displayFeatures = featuredOnly ? FEATURES.slice(0, 5) : FEATURES;
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }
  }, [displayFeatures.length]);

  useEffect(() => {
    if (modalOpen) {
      gsap.to('#service-modal-overlay', {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to('#service-modal-overlay', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  }, [modalOpen]);

  return (
    <div id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Comprehensive IT solutions for every business need.
        </p>
      </div>
      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            className="card p-6 h-full flex flex-col items-start cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #f38c1740' }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            onClick={() => {
              setSelected(i);
              setModalOpen(true);
            }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelected(i);
                setModalOpen(true);
              }
            }}
            aria-label={`More about ${f.title}`}
          >
            <f.icon className="text-3xl text-brand-600" />
            <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-100">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal Pop-up */}
      <AnimatePresence>
        {modalOpen && selected !== null && (
          <>
            {/* Overlay */}
            <motion.div
              id="service-modal-overlay"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              aria-label="Close service details"
            />
            {/* Modal */}
            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="relative w-[95vw] max-w-xs sm:max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-600 text-2xl focus:outline-none"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  tabIndex={0}
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  {selected !== null && (
                    <>
                      {(() => {
                        const Icon = displayFeatures[selected].icon;
                        return (
                          <Icon className="text-4xl text-brand-600 mb-4" />
                        );
                      })()}
                      <h3 className="font-bold text-2xl text-center text-gray-900 dark:text-gray-100 mb-2">
                        {displayFeatures[selected].title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                        {displayFeatures[selected].desc}
                      </p>
                      <div className="text-gray-600 dark:text-gray-400 text-sm text-center max-w-prose mb-2">
                        {displayFeatures[selected].details}
                      </div>

                      {/* Stacks */}
                      {displayFeatures[selected].stacks && (
                        <div className="mt-4 w-full">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
                            We Specialize In:
                          </h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {displayFeatures[selected].stacks.map((stack) => (
                              <span
                                key={stack}
                                className="px-3 py-1 bg-brand-50 dark:bg-gray-800 text-brand-700 dark:text-brand-300 rounded-full text-xs font-medium shadow-sm"
                              >
                                {stack}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {featuredOnly && (
        <div className="mt-8 text-center">
          <a
            href="/services"
            className="inline-block px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            See All Services
          </a>
        </div>
      )}
    </div>
  );
}
