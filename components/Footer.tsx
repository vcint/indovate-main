"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer(){
  const socials = [
    { Icon: FaFacebook, href: '#' },
    { Icon: FaInstagram, href: '#' },
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
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Indovate Technologies Pvt Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
                aria-label="social link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, backgroundColor: '#f38c1720', boxShadow: '0 4px 24px #f38c1740' }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
