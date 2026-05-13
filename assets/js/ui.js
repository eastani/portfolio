// ===== UI ENHANCEMENTS =====
// Progressive enhancement layer: mobile nav drawer, scroll-spy,
// section fade-in, and floating "back to top" button.
// All behaviours degrade gracefully without IntersectionObserver.

(function () {
  'use strict';

  const REDUCED_MOTION =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Mobile nav drawer ----------
  function initMobileNav() {
    const nav = document.querySelector('nav');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('primary-nav');
    if (!nav || !toggle || !links) return;

    const close = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
      (nav.classList.contains('is-open') ? close : open)();
    });

    // Close when a link is tapped (mobile UX) and on Escape.
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // Auto-close if the viewport grows past the mobile breakpoint.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) close();
    });
  }

  // ---------- Scroll-spy (active nav link) ----------
  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;

    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!links.length) return;

    const byId = new Map();
    links.forEach((a) => {
      const id = a.getAttribute('href').slice(1);
      if (id) byId.set(id, a);
    });

    const sections = Array.from(byId.keys())
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setActive = (id) => {
      links.forEach((a) => a.classList.toggle(
        'is-active',
        a.getAttribute('href') === '#' + id
      ));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry with the largest intersection ratio currently in view.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        // The middle band of the viewport drives the active section.
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ---------- Section fade-in ----------
  function initFadeIn() {
    if (REDUCED_MOTION || !('IntersectionObserver' in window)) return;

    // Tag the main content blocks so we don't double-up with hero (already in view).
    const targets = document.querySelectorAll(
      '#about, #skills, #experience, #demo, #architecture, #contact'
    );
    targets.forEach((t) => t.classList.add('fade-in'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((t) => observer.observe(t));
  }

  // ---------- Floating back-to-top ----------
  function initBackToTop() {
    const btn = document.getElementById('to-top');
    if (!btn) return;

    let ticking = false;
    const update = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      if (shouldShow) {
        btn.hidden = false;
        // Next frame so the transition runs.
        requestAnimationFrame(() => btn.classList.add('is-visible'));
      } else {
        btn.classList.remove('is-visible');
        // Hide from AT once the fade-out has played.
        setTimeout(() => {
          if (!btn.classList.contains('is-visible')) btn.hidden = true;
        }, 250);
      }
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
    });

    update();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initScrollSpy();
    initFadeIn();
    initBackToTop();
  });
})();
