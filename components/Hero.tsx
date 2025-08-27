'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero image
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      gsap.to(imageRef.current, {
        y: scrollY * 0.15,
        scale: 1 + scrollY * 0.0005,
        duration: 0.3,
        overwrite: 'auto',
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate text entrance
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 w-full h-full z-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
          alt="Team working"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/10 z-10" />
        {/* Bottom fade to white for smooth blend */}
        <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-white z-20 pointer-events-none" />
      </div>
      <div ref={textRef} className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Your Complete IT Partner for <span className="text-brand-400">Digital Success.</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-100 max-w-prose drop-shadow">
          From web and app development to debugging, hosting, maintenance, SEO, ERP, and AI/LLM training, our expert team delivers comprehensive IT solutions tailored for your business success.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="/contact"
            className="px-6 py-3 rounded-xl bg-brand-600 text-white font-medium inline-flex items-center gap-2 shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-brand-400"
            whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #f38c1740' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            Start a Project <FaArrowRight />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
