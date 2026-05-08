'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              style={{
                fontSize: '64px',
                fontWeight: '900',
                letterSpacing: '-3px',
                lineHeight: 1,
              }}
              className="gradient-text"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Subodh Jain
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)',
                marginTop: '8px',
                transformOrigin: 'center',
              }}
            />
          </motion.div>

          {/* Loading bar */}
          <motion.div
            style={{
              width: '200px',
              height: '2px',
              background: 'var(--border)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
              style={{
                height: '100%',
                width: '50%',
                background: 'linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)',
                borderRadius: '2px',
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: 'var(--text-secondary)', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }}
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
