'use client';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FiCode, FiZap, FiStar, FiAward } from 'react-icons/fi';

const stats = [
  { icon: <FiCode />, value: '5+', label: 'Projects Built' },
  { icon: <FiZap />, value: '1+', label: 'Years Experience' },
  { icon: <FiStar />, value: '90%', label: 'optimization/improvement' },
  { icon: <FiAward />, value: '2+', label: 'Certifications' },
];

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Teerthanker Mahaveer University',
    year: '2023 – 2027',
    gpa: '8.6 CGPA',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'SoftPro India',
    year: '2025',
    gpa: 'Certificate',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <ScrollReveal>
          <SectionHeader tag="01" title="About Me" />
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)',
          gap: '60px',
          marginTop: '60px',
        }}
          className="about-grid"
        >
          {/* Left: Bio */}
          <div>
            <ScrollReveal delay={0.1}>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}>
                Hi! I'm <strong style={{ color: 'var(--text-primary)' }}>Subodh Jain</strong>, a passionate Full Stack Developer with 1+ years of experience building modern web applications. I specialize in creating seamless user experiences with performant, scalable architectures.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                My expertise spans across the entire stack — from crafting pixel-perfect interfaces with <span style={{ color: '#a5b4fc' }}>React & Next.js</span> to architecting robust backends with <span style={{ color: '#a5b4fc' }}>Node.js and PostgreSQL</span>. I'm deeply passionate about clean code, developer experience, and shipping products that users love.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                I aspire to bridge the gap between real-world problems and technology by building software solutions that create real impact.
              </p>
            </ScrollReveal>

            {/* Education cards */}
            <ScrollReveal delay={0.2}>
              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Education
                </h3>
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 4 }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      transition: 'border-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>{edu.degree}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{edu.school}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#a5b4fc', fontSize: '13px', fontWeight: '600' }}>{edu.gpa}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>{edu.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Stats */}
          <div>
            <ScrollReveal delay={0.15} direction="right">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '32px',
              }}>
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -4 }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      padding: '28px 20px',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ color: '#a5b4fc', fontSize: '24px', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                      {stat.icon}
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1px', marginBottom: '4px' }} className="gradient-text">
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Currently working on */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '20px',
                padding: '24px',
              }}>
                <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '12px', fontWeight: '600' }}>
                  Currently
                </div>
                <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>
                  Building a LIMS(Laboratory Inventory Management System)
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  react,redux,nodejs,PostgreSQL,express...
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '12px',
      }}>
        <span style={{
          fontSize: '12px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#6366f1',
          fontWeight: '700',
        }}>
          {tag}
        </span>
        <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, #6366f1, transparent)' }} />
      </div>
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 52px)',
        fontWeight: '900',
        letterSpacing: '-1.5px',
        lineHeight: '1.1',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginTop: '12px', maxWidth: '600px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
