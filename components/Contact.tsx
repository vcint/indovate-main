'use client';
import { useState } from 'react';

export default function Contact(){
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise(r => setTimeout(r, 800));
      setStatus('sent');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold">Let’s build something great</h2>
      <p className="text-gray-600 mt-2">Tell us about your project and we’ll get back within 24 hours.</p>
      <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
        <input required placeholder="Your name" className="rounded-xl border border-gray-300 px-4 py-3" />
        <input type="email" required placeholder="Email" className="rounded-xl border border-gray-300 px-4 py-3" />
        <input placeholder="Company" className="rounded-xl border border-gray-300 px-4 py-3 md:col-span-2" />
        <textarea required placeholder="Project details" rows={5} className="rounded-xl border border-gray-300 px-4 py-3 md:col-span-2" />
        <div className="md:col-span-2 flex items-center gap-3">
          <button
            disabled={status==='sending' || status==='sent'}
            className="px-6 py-3 rounded-xl bg-brand-600 text-white disabled:opacity-60 shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-brand-400"
            style={{
              transform: status === 'sending' ? 'scale(0.97)' : undefined,
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = ''}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
            onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px #f38c17'}
            onBlur={e => e.currentTarget.style.boxShadow = ''}
          >
            {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent ✔' : 'Send message'}
          </button>
          {status==='error' && <span className="text-red-600">Something went wrong. Try again.</span>}
        </div>
      </form>
    </div>
  );
}
