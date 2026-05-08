'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/imsubodhjain', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/imsubodhjain', label: 'LinkedIn' },
  { icon: <FiTwitter size={18} />, href: 'https://x.com/isubodhjain', label: 'Twitter' },
  { icon: <FiMail size={18} />, href: 'mailto:subodh.051137@tmu.ac.in', label: 'Email' },
];

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '60px 0 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-1px', marginBottom: '12px' }}>
              <span className="gradient-text">Subodh Jain</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
              Full Stack Developer building scalable, beautiful web experiences. Available for new opportunities.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '16px' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '16px' }}>
              Connect
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#a5b4fc'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:alex@example.com"
              whileHover={{ scale: 1.04 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '700',
              }}
            >
              <FiMail size={14} /> Let's Talk
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            © {new Date().getFullYear()} Subodh Jain. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: '#f43f5e', display: 'inline-flex' }}
            >
              <FiHeart size={13} fill="#f43f5e" />
            </motion.span>
            {' '}using Next.js & Framer Motion
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Resume'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
