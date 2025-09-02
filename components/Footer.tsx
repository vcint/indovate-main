"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer(){
  const socials = [
    { Icon: FaFacebook, href: '#' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/indovate_tech/' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/company/indovate-technologies ' },
  ];
  return (
    <motion.div
      className="mt-20 border-t"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <footer>
        <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Indovate Technologies Pvt Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  className="group p-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-600 shadow-sm transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-primary-950 dark:text-gray-300 dark:hover:text-primary-400"
                  aria-label="social link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                  scale: 1.12,
                  boxShadow: '0 4px 16px #64748b22'
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <Icon
                  size={20}
                  className="transition-colors duration-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                  />
                </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
