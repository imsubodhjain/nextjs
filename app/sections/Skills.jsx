'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { SectionHeader } from './About';
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiExpress, SiDjango, SiMysql, SiMongodb, SiPostgresql,
  SiRedux, SiPrisma, SiGraphql, SiFirebase, SiVercel,
  SiFigma, SiLinux,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: '#6366f1',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 92 },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', level: 82 },
      { name: 'React', icon: <FaReact />, color: '#61dafb', level: 93 },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', level: 88 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4', level: 90 },
      { name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: '#ff0055', level: 78 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: '#10b981',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 88 },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 85 },
      { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 75 },
      { name: 'Prisma', icon: <SiPrisma />, color: '#2d3748', level: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    color: '#f59e0b',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', level: 82 },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', level: 80 },
      { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Frameworks & Tools',
    emoji: '🛠️',
    color: '#8b5cf6',
    skills: [
      { name: 'Redux', icon: <SiRedux />, color: '#764abc', level: 82 },
      { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3', level: 88 },
      { name: 'Figma', icon: <SiFigma />, color: '#f24e1e', level: 70 },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff', level: 85 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Others',
    emoji: '🚀',
    color: '#ec4899',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 90 },
      { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', level: 90 },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ed', level: 72 },
      { name: 'Linux', icon: <SiLinux />, color: '#fcc624', level: 75 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const active = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <SectionHeader
            tag="02"
            title="Tech Stack"
            subtitle="Technologies I work with to bring ideas to life."
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '48px',
            marginBottom: '48px',
          }}>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: activeCategory === cat.id
                    ? `linear-gradient(135deg, ${cat.color}22, ${cat.color}44)`
                    : 'var(--bg-card)',
                  border: `1px solid ${activeCategory === cat.id ? cat.color + '55' : 'var(--border)'}`,
                  borderRadius: '12px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: activeCategory === cat.id ? cat.color : 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '16px',
          }}
        >
          {active.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} color={active.color} />
          ))}
        </motion.div>

        {/* All skills overview */}
        <ScrollReveal delay={0.3}>
          <div style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onClick={() => setActiveCategory(cat.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.color + '55';
                  e.currentTarget.style.boxShadow = `0 8px 30px ${cat.color}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px' }}>{cat.emoji}</span>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>{cat.label}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{cat.skills.length} technologies</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.skills.map((s) => (
                    <span key={s.name} style={{
                      fontSize: '11px',
                      background: `${cat.color}15`,
                      color: cat.color,
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontWeight: '600',
                      border: `1px solid ${cat.color}30`,
                    }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, ease: 'backOut' }}
      whileHover={{ scale: 1.06, y: -6 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        cursor: 'default',
        transition: 'all 0.2s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = skill.color + '66';
        e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Glow spot */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Icon */}
      <div style={{
        fontSize: '36px',
        color: skill.color,
        filter: `drop-shadow(0 0 8px ${skill.color}55)`,
      }}>
        {skill.icon}
      </div>

      {/* Name */}
      <div style={{
        fontSize: '13px',
        fontWeight: '700',
        textAlign: 'center',
        color: 'var(--text-primary)',
        letterSpacing: '0.3px',
      }}>
        {skill.name}
      </div>

      {/* Progress bar */}
      <div style={{ width: '100%' }}>
        <div style={{
          height: '3px',
          background: 'var(--border)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
              borderRadius: '2px',
            }}
          />
        </div>
        <div style={{
          textAlign: 'right',
          fontSize: '10px',
          color: 'var(--text-secondary)',
          marginTop: '4px',
          fontWeight: '600',
        }}>
          {skill.level}%
        </div>
      </div>
    </motion.div>
  );
}
