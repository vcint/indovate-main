import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Example client logos (replace with your own logo URLs in /public/logos or external links)
const CLIENTS = [
  { name: 'Client 1', img: '/Images/Apisec_Logo.svg' },
  { name: 'Client 2', img: '/Images/artificio_logo.svg' },
  { name: 'Client 3', img: '/Images/Belsio_logo.svg' },
  { name: 'Client 4', img: '/Images/fluence_logo.svg' },
//   { name: 'Client 5', img: '/logos/client5.png' },
//   { name: 'Client 6', img: '/logos/client6.png' },
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simple auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const scroll = () => {
      pos += 0.5; // speed
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div className="py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >Our Clients</motion.h2>
      <div
        ref={scrollRef}
        className="w-full overflow-x-hidden whitespace-nowrap relative"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <motion.div
          className="inline-flex gap-12 min-w-full"
          style={{ animation: 'none' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {CLIENTS.concat(CLIENTS).map((client, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center h-20 w-40"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #f38c1740' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={client.img}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}