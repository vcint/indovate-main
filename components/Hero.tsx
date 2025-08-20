'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
  <div className="container-tight pt-10 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity:0, y: 10 }} animate={{ opacity:1, y:0 }} transition={{ duration: .6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Your Complete IT Partner for <span className="text-brand-600">Digital Success.</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: .1, duration: .6 }} className="mt-5 text-lg text-gray-600 max-w-prose">
            From web and app development to debugging, hosting, maintenance, SEO, ERP, and AI/LLM training, our expert team delivers comprehensive IT solutions tailored for your business success.
          </motion.p>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: .2, duration: .6 }} className="mt-8 flex items-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-brand-600 text-white font-medium inline-flex items-center gap-2 shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              Start a Project <FaArrowRight />
            </motion.a>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl border border-gray-300 bg-white transition-transform shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              See our work
            </motion.a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y:0 }} transition={{ duration: .7, delay: .1 }} className="relative aspect-[4/3] md:aspect-[5/4]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-200 to-brand-500 opacity-20" />
          <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Team working" fill className="object-cover rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
