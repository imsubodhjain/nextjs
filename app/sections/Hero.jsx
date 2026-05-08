'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import ParticleBackground from '../components/ParticleBackground';
import TypingEffect from '../components/TypingEffect';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      <ParticleBackground />

      {/* Radial gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <motion.div
        style={{ y, opacity, zIndex: 1, width: '100%' }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          paddingTop: '100px',
          paddingBottom: '60px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: '60px',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* LEFT: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: '100px',
                padding: '6px 16px',
                marginBottom: '24px',
              }}
            >
              <span style={{
                width: '6px', height: '6px',
                background: '#6366f1',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '13px', color: '#a5b4fc', fontWeight: '500' }}>
                Available for opportunities
              </span>
              <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }`}</style>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: '900',
                lineHeight: '1.05',
                letterSpacing: '-2px',
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              Subodh Jain
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontSize: 'clamp(20px, 3vw, 32px)',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              <span className="gradient-text">Full Stack Developer</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}> & </span>
              <span className="gradient-text">Software Engineer</span>
            </motion.div>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                minHeight: '1.6em',
                marginBottom: '40px',
              }}
            >
              <TypingEffect />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}
            >
              <CTAButton
                primary
                onClick={() => scrollToSection('#projects')}
              >
                View Projects ✦
              </CTAButton>
              <CTAButton
                secondary
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Subodh-Jain-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <HiDownload size={16} />
                Download Resume
              </CTAButton>
              <CTAButton ghost onClick={() => scrollToSection('#contact')}>
                Contact Me
              </CTAButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
            >
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Follow
              </span>
              <div style={{ height: '1px', width: '30px', background: 'var(--border)' }} />
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/imsubodhjain', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/imsubodhjain', label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: 'mailto:subodh.051137@tmu.ac.in', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                  }}
                  title={social.label}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-profile"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(99,102,241,0.4)',
              boxShadow: '0 0 40px rgba(99,102,241,0.3)',
            }}>
              <img
                src="/profile.jpg"
                alt="Subodh Jain"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection('#about')}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-profile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function CTAButton({ primary, secondary, ghost, children, onClick }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.25s ease',
    border: 'none',
  };

  if (primary) return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        ...base,
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff',
        boxShadow: '0 8px 30px rgba(99,102,241,0.35)',
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.5)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.35)'}
    >
      {children}
    </motion.button>
  );

  if (secondary) return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        ...base,
        background: 'var(--bg-card)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
        e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.background = 'var(--bg-card)';
      }}
    >
      {children}
    </motion.button>
  );

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        ...base,
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid transparent',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
    >
      {children}
    </motion.button>
  );
}

