'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { SectionHeader } from './About';
import { FiGithub, FiExternalLink, FiX, FiStar, FiGitBranch } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Labkind ERP',
    description: 'Labkind ERP (Laboratory Information Management System) is a centralized digital platform developed to automate and manage laboratory operations efficiently.',
    longDescription: 'The system is designed to replace traditional manual registers and paperwork with a secure, organized, and transparent workflow-based solution.',
    image: '/labkind.jpeg',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['react.js', 'TypeScript', 'PostgreSQL', 'Express.js', 'Prisma', 'TailwindCSS'],
    github: 'https://github.com/imsubodhjain',
    demo: 'https://gamersandesh.github.io/labkind-erp/',
    stars: 12,
    featured: true,
  },
  {
    id: 2,
    title: 'HealthNexus',
    description: 'HealthNexus is a healthcare web-based application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
    longDescription: 'The main objective of this project is to simplify the healthcare appointment and management process through a digital platform.',
    image: '/healthnexus.png',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'Node.js', 'MongoDB', 'git', 'Express', 'Redux'],
    github: 'https://github.com/imsubodhjain',
    demo: 'https://example.com',
    stars: 8,
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Student Collaboration ',
    description: 'students first prove their skills through tests ,system evaluates them',
    longDescription: 'profiles get skill ratings/badges ,students upload projects , other students contribute to projects teams form based on verified skills',
    image: '/student.png',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['react.js', 'gemini API', 'Express.js', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/imsubodhjain',
    demo: 'https://example.com',
    stars: 10,
    featured: true,
  },
  // {
  //   id: 4,
  //   title: 'DevOps Pipeline Visualizer',
  //   description: 'A tool to visualize and monitor CI/CD pipelines with live logs, metrics, and deployment history.',
  //   longDescription: 'Built for engineering teams to get full visibility into their deployment pipelines. Integrates with GitHub Actions and GitLab CI, showing real-time log streaming, build metrics, deployment history, and failure alerts via Slack/email.',
  //   image: null,
  //   gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  //   tags: ['React', 'Node.js', 'Docker', 'GitHub API', 'WebSockets'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   stars: 56,
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: 'Personal Finance Tracker',
  //   description: 'Smart expense tracker with AI-categorized transactions, budgets, and spending insights.',
  //   longDescription: 'A personal finance app that automatically categorizes transactions using AI, tracks spending against budgets, generates monthly insights, and provides savings recommendations. Integrates with Plaid for bank account syncing.',
  //   image: null,
  //   gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  //   tags: ['React Native', 'Expo', 'Node.js', 'Plaid API', 'SQLite'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   stars: 43,
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: 'Open Source UI Library',
  //   description: 'A collection of 50+ accessible, animated React components built with Tailwind CSS.',
  //   longDescription: 'A fully open-source component library featuring 50+ production-ready React components. All components are fully accessible (WCAG 2.1), animated with Framer Motion, theme-aware, and tree-shakeable. Used by 200+ developers.',
  //   image: null,
  //   gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  //   tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Storybook', 'TypeScript'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   stars: 312,
  //   featured: false,
  // },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" style={{ padding: '120px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal>
          <SectionHeader
            tag="03"
            title="Projects"
            subtitle="A selection of things I've built with love and late nights."
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div style={{ display: 'flex', gap: '10px', marginTop: '40px', marginBottom: '48px' }}>
            {['all', 'featured'].map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '10px',
                  border: `1px solid ${filter === f ? 'rgba(99,102,241,0.5)' : 'var(--border)'}`,
                  background: filter === f ? 'rgba(99,102,241,0.12)' : 'var(--bg-card)',
                  color: filter === f ? '#a5b4fc' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'inherit',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s',
                }}
              >
                {f === 'all' ? `All (${projects.length})` : `Featured (${projects.filter(p => p.featured).length})`}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image / Gradient preview */}
      <div style={{
        height: '180px',
        background: project.gradient,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        )}
        {/* Overlay pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 10px)',
        }} />
        {/* Project title overlay */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          {project.featured && (
            <span style={{
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '4px 12px',
              fontSize: '11px',
              color: '#fff',
              fontWeight: '600',
              letterSpacing: '1px',
            }}>
              FEATURED
            </span>
          )}
          <span style={{
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '100px',
            padding: '4px 12px',
            fontSize: '12px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginLeft: 'auto',
          }}>
            <FiStar size={11} /> {project.stars}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.3px' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} style={{
              fontSize: '11px',
              background: 'rgba(99,102,241,0.1)',
              color: '#a5b4fc',
              padding: '3px 10px',
              borderRadius: '6px',
              fontWeight: '600',
              border: '1px solid rgba(99,102,241,0.2)',
            }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span style={{
              fontSize: '11px',
              color: 'var(--text-secondary)',
              padding: '3px 10px',
              fontWeight: '600',
            }}>
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px',
              borderRadius: '10px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '28px',
          maxWidth: '600px',
          width: '100%',
          overflow: 'hidden',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Modal header */}
        <div style={{ height: '200px', background: project.gradient, position: 'relative' }}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          )}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              padding: '8px',
              cursor: 'pointer',
              color: '#fff',
              display: 'flex',
            }}
          >
            <FiX size={18} />
          </motion.button>
        </div>

        {/* Modal body */}
        <div style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.5px' }}>{project.title}</h2>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FiStar size={13} /> {project.stars}
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px', fontSize: '15px' }}>
            {project.longDescription}
          </p>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '600' }}>
              Tech Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '12px',
                  background: 'rgba(99,102,241,0.1)',
                  color: '#a5b4fc',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              <FiGithub size={16} /> View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
