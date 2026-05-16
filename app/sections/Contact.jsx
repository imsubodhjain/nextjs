'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { SectionHeader } from './About';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiSend, FiCheck } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const socials = [
  {
    label: 'GitHub',
    handle: '@imsubodhjain',
    href: 'https://github.com/imsubodhjain',
    icon: <FiGithub size={22} />,
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    label: 'LinkedIn',
    handle: '/in/imsubodhjain',
    href: 'https://linkedin.com/in/imsubodhjain',
    icon: <FiLinkedin size={22} />,
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.1)',
  },
  {
    label: 'Twitter / X',
    handle: '@isubodhjain',
    href: 'https://x.com/isubodhjain',
    icon: <FiTwitter size={22} />,
    color: '#1d9bf0',
    bg: 'rgba(29,155,240,0.1)',
  },
  {
    label: 'Email',
    handle: 'subodh.051137@tmu.ac.in',
    href: 'subodh.051137@tmu.ac.in',
    icon: <FiMail size={22} />,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 0 80px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <SectionHeader
            tag="05"
            title="Get In Touch"
            subtitle="Have a project in mind? Let's build something great together."
          />
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '60px',
          marginTop: '64px',
          alignItems: 'flex-start',
        }}
          className="contact-grid"
        >
          {/* LEFT: Info */}
          <ScrollReveal delay={0.1}>
            <div>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '40px' }}>
                I'm currently open to new opportunities — whether that's a full-time role, freelance project, or a fun collaboration. My inbox is always open. If you have a question or just want to say hi, I'll do my best to get back to you!
              </p>

              {/* Social cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      background: s.bg,
                      border: '1px solid var(--border)',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${s.color}44`;
                      e.currentTarget.style.boxShadow = `0 4px 20px ${s.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ color: s.color, display: 'flex' }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700' }}>{s.label}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{s.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability badge */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(99,102,241,0.1))',
                border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '14px', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '2px' }}>Currently Available</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    Open to full-time, freelance & consulting opportunities
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '28px',
              padding: '40px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                <HiSparkles style={{ color: '#6366f1', fontSize: '20px' }} />
                <span style={{ fontWeight: '800', fontSize: '18px' }}>Send a Message</span>
              </div>

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '60px 0',
                      gap: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 0 30px rgba(16,185,129,0.4)',
                      }}
                    >
                      <FiCheck size={28} />
                    </motion.div>
                    <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    {/* Name + Email row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                      <FormField
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="subodh jain"
                        value={form.name}
                        onChange={handleChange}
                        focused={focused}
                        setFocused={setFocused}
                        required
                      />
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="subodh@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        focused={focused}
                        setFocused={setFocused}
                        required
                      />
                    </div>

                    <FormField
                      label="Subject"
                      name="subject"
                      type="text"
                      placeholder="Project Collaboration"
                      value={form.subject}
                      onChange={handleChange}
                      focused={focused}
                      setFocused={setFocused}
                    />

                    {/* Message */}
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: focused === 'message' ? '#a5b4fc' : 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        style={{
                          width: '100%',
                          background: 'var(--bg-secondary)',
                          border: `1px solid ${focused === 'message' ? 'rgba(99,102,241,0.5)' : 'var(--border)'}`,
                          borderRadius: '14px',
                          padding: '14px 16px',
                          color: 'var(--text-primary)',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          minHeight: '120px',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          boxShadow: focused === 'message' ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '16px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '700',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        fontFamily: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
                        opacity: status === 'sending' ? 0.7 : 1,
                        transition: 'opacity 0.2s',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{
                              width: '16px', height: '16px',
                              border: '2px solid rgba(255,255,255,0.3)',
                              borderTopColor: '#fff',
                              borderRadius: '50%',
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({ label, name, type, placeholder, value, onChange, focused, setFocused, required }) {
  const isFocused = focused === name;
  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '8px',
        color: isFocused ? '#a5b4fc' : 'var(--text-secondary)',
        transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused('')}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          background: 'var(--bg-secondary)',
          border: `1px solid ${isFocused ? 'rgba(99,102,241,0.5)' : 'var(--border)'}`,
          borderRadius: '12px',
          padding: '12px 16px',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: isFocused ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
        }}
      />
    </div>
  );
}
