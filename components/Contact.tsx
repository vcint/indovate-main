'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="card p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h2 className="text-2xl font-bold">Let’s build something great</motion.h2>
      <motion.p className="text-gray-600 dark:text-gray-300 mt-2">
        Tell us about your project and we’ll get back within 24 hours.
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        className="mt-6 grid md:grid-cols-2 gap-4"
      >
        <input name="name" required placeholder="Your name" className="rounded-xl border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700" />
        <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700" />
        <input name="company" placeholder="Company" className="rounded-xl border border-gray-300 px-4 py-3 md:col-span-2 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700" />
        <textarea name="message" required placeholder="Project details" rows={5} className="rounded-xl border border-gray-300 px-4 py-3 md:col-span-2 bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700" />
        <div className="md:col-span-2 flex items-center gap-3">
          <motion.button
            type="submit"
            disabled={status==='sending' || status==='sent'}
            className="px-6 py-3 rounded-xl bg-brand-600 text-white disabled:opacity-60 shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-brand-400"
            whileHover={{ scale: status==='idle' ? 1.05 : 1, boxShadow: status==='idle' ? '0 4px 24px #f38c1740' : undefined }}
            whileTap={{ scale: 0.97 }}
            animate={status==='sent' ? { scale: [1, 1.15, 1], backgroundColor: '#22c55e' } : status==='error' ? { x: [0, -8, 8, -8, 8, 0] } : {}}
            transition={{ duration: status==='sent' ? 0.5 : 0.3 }}
            style={{
              transform: status === 'sending' ? 'scale(0.97)' : undefined,
            }}
            onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px #f38c17'}
            onBlur={e => e.currentTarget.style.boxShadow = ''}
          >
            <AnimatePresence mode="wait">
              {status==='sending' ? (
                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Sending…</motion.span>
              ) : status==='sent' ? (
                <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Sent ✔</motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Send message</motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <AnimatePresence>
            {status==='error' && (
              <motion.span
                className="text-red-600"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >Something went wrong. Try again.</motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </motion.div>
  );
}