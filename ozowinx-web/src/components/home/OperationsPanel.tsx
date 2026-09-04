'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const SYSTEMS = [
  { name: 'Product Engineering', status: 'Active' },
  { name: 'AI Systems', status: 'Active' },
  { name: 'Cloud Infrastructure', status: 'Healthy' },
  { name: 'Automation', status: 'Running' },
];

const UPTIME_CYCLE = ['99.98%', '99.97%', '99.99%', '99.98%'];

/**
 * Abstract digital-operations panel used as the hero visual.
 * Communicates that Ozowinx operates systems, not just delivers projects.
 */
export function OperationsPanel() {
  const reduced = useReducedMotion();
  const [uptimeIndex, setUptimeIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setUptimeIndex((i) => (i + 1) % UPTIME_CYCLE.length),
      4200,
    );
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
      className="animate-float overflow-hidden rounded-2xl border border-line bg-white shadow-float"
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-surface px-[18px] py-3.5">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-[11.5px] tracking-[0.03em] text-ink-tertiary">
          ozowinx.systems / operations
        </span>
      </div>

      <div className="p-6">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.06em] text-ink">
            OZOWINX
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">
            DIGITAL OPERATIONS
          </p>
        </div>

        <div className="mt-4 flex justify-between font-mono text-[11px] tracking-[0.08em] text-ink-tertiary">
          <span>PROJECTS</span>
          <span>SYSTEMS</span>
        </div>

        <div className="my-3.5 h-px bg-line" />

        <ul className="space-y-3">
          {SYSTEMS.map((s, i) => (
            <li
              key={s.name}
              className="flex items-center justify-between text-sm font-medium"
            >
              <span>{s.name}</span>
              <span className="flex items-center gap-2 font-mono text-[11.5px] text-ok">
                <motion.span
                  className="size-1.5 rounded-full bg-ok ring-3 ring-ok/15"
                  animate={reduced ? undefined : { opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                />
                {s.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="my-3.5 h-px bg-line" />

        <p className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary">
          SYSTEM PERFORMANCE
        </p>

        <Sparkline />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <Metric value={UPTIME_CYCLE[uptimeIndex]} label="Uptime" good />
          <Metric value="42" label="Active Systems" />
          <Metric value="+24%" label="Efficiency" good />
          <Metric value="18" label="Integrations" />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Throughput trace. The shape is fixed rather than random so the server and
 * client render identically; only the draw-in is animated.
 */
function Sparkline() {
  const reduced = useReducedMotion();
  const points =
    '0,26 14,20 28,23 42,12 56,17 70,8 84,14 98,6 112,10 126,3';

  return (
    <svg
      viewBox="0 0 126 32"
      className="mt-4 h-9 w-full"
      fill="none"
      aria-hidden="true"
    >
      <motion.polyline
        points={points}
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.6 }}
      />
      <motion.polyline
        points={points + ' 126,32 0,32'}
        fill="var(--color-accent)"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 0.9, delay: 1.4 }}
      />
    </svg>
  );
}

function Metric({
  value,
  label,
  good = false,
}: {
  value: string;
  label: string;
  good?: boolean;
}) {
  return (
    <div>
      <motion.p
        key={value}
        initial={{ opacity: 0.4, y: -3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        className={`text-[26px] font-bold tracking-[-0.02em] tabular-nums ${
          good ? 'text-ok' : 'text-ink'
        }`}
      >
        {value}
      </motion.p>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-tertiary">
        {label}
      </p>
    </div>
  );
}
