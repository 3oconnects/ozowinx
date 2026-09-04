'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV } from '@/lib/site';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-250 ${
        scrolled
          ? 'border-line bg-white/80 shadow-card backdrop-blur-xl backdrop-saturate-150'
          : 'border-transparent bg-white'
      }`}
    >
      <div
        className={`mx-auto flex max-w-site items-center justify-between px-5 transition-all duration-250 sm:px-8 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Logo animated priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const active = isActive(item.href);

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenMenu(item.href)}
                onMouseLeave={() => hasChildren && setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors ${
                    active ? 'text-ink' : 'text-ink-secondary hover:text-ink'
                  }`}
                  aria-expanded={hasChildren ? openMenu === item.href : undefined}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-250 ${
                        openMenu === item.href ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Hover underline wipes in from the left. The active route
                      keeps a persistent one driven by layoutId, so it slides
                      between sections instead of blinking out and back in. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  />
                  {active &&
                    (reduced ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-ink"
                      />
                    ) : (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-ink"
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    ))}
                </Link>

                <AnimatePresence>
                  {hasChildren && openMenu === item.href && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduced ? undefined : { opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-xl border border-line bg-white/95 p-2 shadow-float backdrop-blur-xl">
                        {item.children!.map((child, i) => (
                          <motion.div
                            key={child.href}
                            initial={reduced ? false : { opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: EASE,
                              delay: reduced ? 0 : 0.03 * i,
                            }}
                          >
                            <Link
                              href={child.href}
                              className="group/item block rounded-lg px-3 py-2.5 transition-colors hover:bg-accent-tint"
                            >
                              <span className="block text-[14.5px] font-semibold text-ink transition-colors group-hover/item:text-accent-dark">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-[13px] leading-snug text-ink-secondary">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            className="hidden rounded-lg border border-line-strong px-[18px] py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-surface md:inline-flex"
          >
            Talk to Us
          </Link>
          <Button
            href="/contact"
            variant="primary"
            showArrow
            className="!px-[18px] !py-2.5 !text-sm"
          >
            Start a Project
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white px-5 pb-16 pt-6 lg:hidden"
          >
            <nav aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: EASE,
                    delay: reduced ? 0 : 0.04 * i,
                  }}
                  className="border-b border-line py-1"
                >
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pb-3 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-[15px] text-ink-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <Button
              href="/contact"
              variant="accent"
              showArrow
              className="mt-6 w-full justify-center"
            >
              Start a Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
