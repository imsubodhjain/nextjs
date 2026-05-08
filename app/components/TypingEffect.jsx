'use client';
import { useEffect, useState } from 'react';

const phrases = [
  'I build scalable web apps.',
  'I craft beautiful UI/UX.',
  'I love clean, fast code.',
  'I turn ideas into products.',
];

export default function TypingEffect() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = phrases[idx];
    let timeout;

    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 65);
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 35);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, idx]);

  return (
    <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>
      {text}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: '#6366f1',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </span>
  );
}
