'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import ScrollReveal from '../components/ScrollReveal';
import { SectionHeader } from './About';
import { FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi';

// Fetch LeetCode data from Alfa LeetCode API
const fetchLeetcodeData = async (username = 'imsubodhjain') => {
  try {
    const [solvedRes, calendarRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
    ]);

    if (!solvedRes.ok || !calendarRes.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const solvedData = await solvedRes.json();
    const calendarData = await calendarRes.json();

    if (solvedData.error || calendarData.error) {
      throw new Error(solvedData.error || calendarData.error);
    }

    // Format the contribution data for the calendar heatmap
    let contributionData = [];
    if (calendarData.submissionCalendar) {
      const submissions = JSON.parse(calendarData.submissionCalendar);
      contributionData = Object.keys(submissions).map(timestamp => {
        // Convert Unix timestamp (seconds) to Date object
        const date = new Date(parseInt(timestamp) * 1000);
        // Format date as YYYY-MM-DD
        const formattedDate = date.toISOString().split('T')[0];

        return {
          date: formattedDate,
          count: submissions[timestamp]
        };
      });
    }

    return {
      currentStreak: calendarData.streak || 0,
      totalSolved: solvedData.solvedProblem || 0,
      easy: solvedData.easySolved || 0,
      medium: solvedData.mediumSolved || 0,
      hard: solvedData.hardSolved || 0,
      totalActiveDays: calendarData.totalActiveDays || 0,
      contributionData: contributionData,
    };
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return null;
  }
};

export default function LeetcodeStats() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [leetcodeData, setLeetcodeData] = useState({
    currentStreak: 0,
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    totalActiveDays: 0,
    contributionData: [],
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchLeetcodeData();

      if (data) {
        setLeetcodeData(data);
        setError(false);
      } else {
        setError(true);
      }

      setIsLoading(false);
    };

    loadData();
  }, []);

  const stats = [
    {
      icon: FiZap,
      value: leetcodeData.currentStreak,
      label: 'Current Streak',
      color: '#ff6b6b',
      bgGradient: 'rgba(255, 107, 107, 0.1)',
    },
    {
      icon: FiTarget,
      value: leetcodeData.totalSolved,
      label: 'Problems Solved',
      color: '#22c55e',
      bgGradient: 'rgba(34, 197, 94, 0.1)',
    },
    {
      icon: FiTrendingUp,
      value: leetcodeData.totalActiveDays,
      label: 'Active Days',
      color: '#a78bfa',
      bgGradient: 'rgba(167, 139, 250, 0.1)',
    },
  ];

  const difficultyStats = [
    {
      label: 'Easy',
      count: leetcodeData.easy,
      percentage: leetcodeData.totalSolved ? (leetcodeData.easy / leetcodeData.totalSolved) * 100 : 0,
      color: '#22c55e',
      bgColor: 'rgba(34, 197, 94, 0.1)',
    },
    {
      label: 'Medium',
      count: leetcodeData.medium,
      percentage: leetcodeData.totalSolved ? (leetcodeData.medium / leetcodeData.totalSolved) * 100 : 0,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)',
    },
    {
      label: 'Hard',
      count: leetcodeData.hard,
      percentage: leetcodeData.totalSolved ? (leetcodeData.hard / leetcodeData.totalSolved) * 100 : 0,
      color: '#ef4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="leetcode" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <ScrollReveal>
          <SectionHeader
            tag="02"
            title="LeetCode Journey"
            subtitle="Consistency beats intensity. Tracking my daily problem-solving journey."
          />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ marginTop: '40px' }}
        >
          {/* Top stats cards */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '30px',
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: `linear-gradient(135deg, var(--bg-card) 0%, rgba(99,102,241,0.05) 100%)`,
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '24px',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${stat.color}40`;
                    e.currentTarget.style.boxShadow = `0 20px 50px ${stat.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Glow background effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '80px',
                      height: '80px',
                      background: `radial-gradient(circle, ${stat.color}15, transparent)`,
                      borderRadius: '50%',
                      filter: 'blur(30px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: stat.bgGradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: stat.color,
                        fontSize: '24px',
                      }}>
                        <Icon />
                      </div>
                    </div>

                    <div style={{
                      fontSize: '36px',
                      fontWeight: '900',
                      letterSpacing: '-1px',
                      marginBottom: '4px',
                      color: stat.color,
                    }}>
                      {isLoading ? (
                        <SkeletonLoader width="100px" height="48px" />
                      ) : (
                        stat.value
                      )}
                    </div>

                    <div style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      fontWeight: '500',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Heatmap calendar */}
          <ScrollReveal delay={0.3}>
            <motion.div
              variants={itemVariants}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '30px',
              }}
              className="heatmap-container"
            >
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <FiZap style={{ color: '#22c55e' }} />
                  Contribution Calendar
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                }}>
                  Daily problem-solving activity over the last year
                </p>
              </div>

              <div style={{ overflowX: 'auto', paddingBottom: '16px' }}>
                {isLoading || error ? (
                  <SkeletonLoader width="100%" height="200px" />
                ) : (
                  <div style={{ minWidth: '800px' }}>
                    <CalendarHeatmap
                      startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                      endDate={new Date()}
                      values={leetcodeData.contributionData}
                      classForValue={(value) => {
                        if (!value) return 'color-empty';
                        return `color-scale-${value.count}`;
                      }}
                      tooltipDataAttrs={(value) => ({
                        'data-tooltip-id': 'leetcode-tooltip',
                        'data-tooltip-content': value.count ? `${value.count} problem${value.count > 1 ? 's' : ''} on ${value.date}` : 'No activity',
                      })}
                    />
                    <Tooltip id="leetcode-tooltip" />
                  </div>
                )}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Difficulty breakdown */}
          <ScrollReveal delay={0.4}>
            <motion.div
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
              }}
              className="difficulty-grid"
            >
              {difficultyStats.map((difficulty, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -2 }}
                  style={{
                    background: `linear-gradient(135deg, var(--bg-card) 0%, ${difficulty.bgColor} 100%)`,
                    border: `1.5px solid ${difficulty.color}40`,
                    borderRadius: '20px',
                    padding: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${difficulty.color}80`;
                    e.currentTarget.style.boxShadow = `0 15px 40px ${difficulty.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${difficulty.color}40`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Progress bar background */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${difficulty.percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${difficulty.color}, ${difficulty.color}80)`,
                      borderRadius: '0 0 20px 0',
                    }}
                  />

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${difficulty.bgColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: difficulty.color,
                      fontWeight: '700',
                      fontSize: '20px',
                    }}>
                      {difficulty.label[0]}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        marginBottom: '2px',
                      }}>
                        Solved
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: difficulty.color,
                        fontWeight: '600',
                      }}>
                        {difficulty.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: difficulty.color,
                  }}>
                    {difficulty.label}
                  </h4>

                  <div style={{
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '12px',
                      height: '8px',
                      overflow: 'hidden',
                      border: `1px solid ${difficulty.color}20`,
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${difficulty.percentage}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${difficulty.color}, ${difficulty.color}cc)`,
                          borderRadius: '12px',
                        }}
                      />
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '12px',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}>
                      <span style={{ color: difficulty.color }}>
                        {difficulty.count} problems
                      </span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                        out of {leetcodeData.totalSolved}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Stats insight card */}
          <ScrollReveal delay={0.5}>
            <motion.div
              variants={itemVariants}
              style={{
                marginTop: '40px',
                background: error
                  ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%)',
                border: error ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: error ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0,
              }}>
                {error ? '!' : 'i'}
              </div>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: error ? '#ef4444' : '#22c55e',
                  marginBottom: '4px',
                }}>
                  {error ? 'ERROR LOADING DATA' : 'ACHIEVEMENT UNLOCKED'}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}>
                  {error
                    ? 'Failed to load LeetCode data'
                    : `${leetcodeData.currentStreak > 0 ? `${leetcodeData.currentStreak}-Day Streak!` : 'Keep Solving!'}`}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                }}>
                  {error
                    ? 'Please check your internet connection and try refreshing the page.'
                    : `${leetcodeData.totalSolved} problems solved with ${leetcodeData.totalActiveDays} active coding days. Keep pushing!`}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .difficulty-grid { grid-template-columns: 1fr !important; }
          .heatmap-container { padding: 20px !important; }
        }

        /* Calendar heatmap styles */
        .react-calendar-heatmap {
          font-family: inherit;
          font-size: 14px;
        }

        .react-calendar-heatmap rect {
          rx: 2;
          ry: 2;
        }

        .react-calendar-heatmap .color-empty {
          fill: rgba(255, 255, 255, 0.05);
        }

        .react-calendar-heatmap .color-scale-1 {
          fill: #0e4429;
        }

        .react-calendar-heatmap .color-scale-2 {
          fill: #006d32;
        }

        .react-calendar-heatmap .color-scale-3 {
          fill: #26a641;
        }

        .react-calendar-heatmap .color-scale-4 {
          fill: #39d353;
        }

        .react-calendar-heatmap .color-scale-5 {
          fill: #4ade80;
        }

        .react-calendar-heatmap text.react-calendar-heatmap-text {
          fill: var(--text-secondary);
          font-size: 12px;
        }

        .react-tooltip {
          background: rgba(0, 0, 0, 0.8) !important;
          border: 1px solid rgba(99, 102, 241, 0.3) !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
          font-size: 13px !important;
          color: #fff !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
        }
      `}</style>
    </section>
  );
}

// Loading skeleton component
function SkeletonLoader({ width = '100%', height = '20px' }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        width,
        height,
        background: 'linear-gradient(90deg, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.2) 50%, rgba(99,102,241,0.1) 100%)',
        borderRadius: '8px',
      }}
    />
  );
}
