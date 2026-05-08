'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(10,10,15,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        className={theme === 'light' && scrolled ? 'light-nav' : ''}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '22px',
              fontWeight: '800',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
          >
            <span className="gradient-text">SJ</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px', marginLeft: '6px', fontWeight: '400' }}>Subodh Jain</span>
          </motion.a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.background = 'var(--bg-card)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '8px',
              }}
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '10px',
                padding: '8px 20px',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '600',
                marginLeft: '8px',
                fontFamily: 'inherit',
                boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-only">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex' }}
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex' }}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              background: 'rgba(10,10,20,0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.color = '#a5b4fc'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-secondary)'; }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: '8px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '10px',
                padding: '14px',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'inherit',
              }}
            >
              Hire Me ✦
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
      `}</style>
    </>
  );
}
