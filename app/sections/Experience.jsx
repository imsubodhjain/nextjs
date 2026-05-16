'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { SectionHeader } from './About';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: ' Full Stack Developer Intern',
    company: 'Labkind-ERP',
    location: 'Moradabad,(Remote)',
    period: 'March 26 – Present',
    type: 'Full-time',
    color: '#6366f1',
    highlights: [
      'Labkind ERP (Laboratory Information Management System) is a centralized digital platform developed to automate and manage laboratory operations efficiently.',
      'The system is designed to replace traditional manual registers and paperwork with a secure, organized, and transparent workflow-based solution.',
      'Laboratory-wise distribution',
      'Prevent inventory errors and chemical wastage',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    role: 'MERN Stack Training',
    company: 'SoftPro India',
    location: 'Noida, India',
    period: 'Jun 2025 – Sept 2025',
    type: 'Full-time',
    color: '#8b5cf6',
    highlights: [
      'Building responsive user interfaces using React.js',
      'Creating RESTful APIs with Node.js and Express.js',
      'Implementing authentication and CRUD operations',
      'Using Git and GitHub for version control',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Git', 'Docker'],
  },
  {
    role: 'HealthNexus-A Healthcare Web based Application',
    company: 'YBI Foundation',
    location: 'Delhi, India',
    period: 'Jun 2025 – Sept 2025',
    type: 'Project',
    color: '#06b6d4',
    highlights: [
      'HealthNexus is a healthcare web-based application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
      'The main objective of this project is to simplify the healthcare appointment and management process through a digital platform.',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'ExpressJS'],
  },
  // {
  //   role: 'Open Source Contributor',
  //   company: 'Various Projects',
  //   location: 'Remote',
  //   period: '2025 – Present',
  //   type: 'Volunteer',
  //   color: '#10b981',
  //   highlights: [
  //     'Contributed 50+ PRs to popular React and Node.js open source projects.',
  //     'Authored and maintain a UI component library with 300+ GitHub stars.',
  //     'Active contributor to Next.js docs and community Discord.',
  //   ],
  //   tech: ['React', 'Next.js', 'Open Source', 'GitHub'],
  // },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <SectionHeader
            tag="04"
            title="Experience"
            subtitle="My professional journey and the impact I've made."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ marginTop: '72px', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
    >
      {/* Timeline dot */}
      <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${exp.color}33, ${exp.color}11)`,
            border: `2px solid ${exp.color}55`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: `0 0 20px ${exp.color}22`,
          }}
        >
          <FiBriefcase color={exp.color} size={24} />
        </motion.div>
      </div>

      {/* Content card */}
      <motion.div
        whileHover={{ x: 4 }}
        style={{
          flex: 1,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '28px',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${exp.color}44`;
          e.currentTarget.style.boxShadow = `0 8px 30px ${exp.color}12`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.3px', marginBottom: '4px' }}>
              {exp.role}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: exp.color, fontWeight: '700', fontSize: '15px' }}>
              <FiBriefcase size={13} />
              {exp.company}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{
              fontSize: '11px',
              background: `${exp.color}22`,
              color: exp.color,
              padding: '4px 12px',
              borderRadius: '100px',
              fontWeight: '700',
              border: `1px solid ${exp.color}33`,
              display: 'block',
              marginBottom: '6px',
            }}>
              {exp.type}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)', fontSize: '12px', justifyContent: 'flex-end' }}>
              <FiCalendar size={11} /> {exp.period}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)', fontSize: '12px', justifyContent: 'flex-end', marginTop: '2px' }}>
              <FiMapPin size={11} /> {exp.location}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {exp.highlights.map((h, hi) => (
            <li key={hi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: exp.color,
                flexShrink: 0,
                marginTop: '7px',
              }} />
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {exp.tech.map((t) => (
            <span key={t} style={{
              fontSize: '11px',
              background: `${exp.color}15`,
              color: exp.color,
              padding: '3px 10px',
              borderRadius: '6px',
              fontWeight: '600',
              border: `1px solid ${exp.color}25`,
            }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
