/* ══════════════════════════════════════════
   DiNapoli — GSAP Animations & Interactions
   ══════════════════════════════════════════ */

'use strict';

gsap.registerPlugin(ScrollTrigger);

/* ── Loader ─────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const tl = gsap.timeline();

  tl.to('.loader__progress', {
    width: '100%',
    duration: 1.2,
    ease: 'power2.inOut',
  })
  .to(loader, {
    yPercent: -100,
    duration: 0.8,
    ease: 'power3.inOut',
    delay: 0.2,
    onComplete: () => {
      loader.style.display = 'none';
      initHeroAnimations();
    }
  });
}

/* ── Hero Entrance ──────────────────────── */
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Parallax zoom on hero image
  gsap.fromTo('.hero__img',
    { scale: 1.15 },
    { scale: 1, duration: 2.5, ease: 'power2.out' }
  );

  // Staggered content entrance (autoAlpha handles opacity + visibility)
  tl.fromTo('.hero__badge',
    { autoAlpha: 0, y: -20 },
    { autoAlpha: 1, y: 0, duration: 0.8 },
  0.3)
  .fromTo('.hero__title-line',
    { autoAlpha: 0, y: 60 },
    { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
  0.4)
  .fromTo('.hero__subtitle',
    { autoAlpha: 0, y: 30 },
    { autoAlpha: 1, y: 0, duration: 0.9 },
  0.9)
  .fromTo('.hero__actions',
    { autoAlpha: 0, y: 25 },
    { autoAlpha: 1, y: 0, duration: 0.8 },
  1.1)
  .fromTo('.hero__scroll',
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1 },
  1.6);
}

/* ── Hero Parallax on Scroll ────────────── */
function initHeroParallax() {
  gsap.to('.hero__img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.hero__content', {
    y: 80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: '60% top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

/* ── About Section ──────────────────────── */
function initAboutAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%',
      end: 'center center',
      toggleActions: 'play none none none',
    }
  });

  tl.from('.about__text .eyebrow', {
    opacity: 0, x: -30, duration: 0.6
  })
  .from('.about__text .section-title', {
    opacity: 0, y: 40, duration: 0.8
  }, 0.15)
  .from('.about__body', {
    opacity: 0, y: 30, duration: 0.7
  }, 0.35)
  .from('.stat-card', {
    opacity: 0, y: 40, scale: 0.95, duration: 0.6, stagger: 0.1
  }, 0.5)
  .from('.about__est', {
    opacity: 0, duration: 0.5
  }, 0.8);

  // Images with parallax
  gsap.from('.about__img-main', {
    opacity: 0,
    x: 60,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about__images',
      start: 'top 75%',
    }
  });

  gsap.from('.about__img-accent', {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about__images',
      start: 'top 75%',
    }
  });

  // Subtle parallax on images
  gsap.to('.about__img-main', {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.about__img-accent', {
    y: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
}

/* ── Menu Section ───────────────────────── */
function initMenuAnimations() {
  gsap.from('.menu-section .section-header > *', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.menu-section .section-header',
      start: 'top 80%',
    }
  });

  gsap.from('.menu-card', {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: {
      amount: 0.6,
      grid: [4, 2],
      from: 'start',
    },
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.menu-grid',
      start: 'top 80%',
    }
  });

  gsap.from('.menu-footnote', {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.menu-footnote',
      start: 'top 90%',
    }
  });
}

/* ── Testimonial ────────────────────────── */
function initTestimonialAnimations() {
  // Parallax background
  gsap.to('.testimonial__img', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.testimonial',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.testimonial',
      start: 'top 65%',
    }
  });

  tl.from('.testimonial__mark', {
    opacity: 0, scale: 0.5, duration: 0.8, ease: 'back.out(1.5)'
  })
  .from('.testimonial__quote', {
    opacity: 0, y: 40, duration: 0.9, ease: 'power3.out'
  }, 0.2)
  .from('.testimonial__source', {
    opacity: 0, y: 20, duration: 0.6
  }, 0.6)
  .from('.testimonial__stars', {
    opacity: 0, scale: 0.8, duration: 0.5
  }, 0.8);
}

/* ── Hours Section ──────────────────────── */
function initHoursAnimations() {
  gsap.from('.hours__intro > *', {
    opacity: 0,
    y: 35,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hours',
      start: 'top 70%',
    }
  });

  gsap.from('.hours__table-wrap', {
    opacity: 0,
    x: 50,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hours__table-wrap',
      start: 'top 80%',
    }
  });

  // Stagger table rows
  gsap.from('.hours__table tbody tr', {
    opacity: 0,
    x: 20,
    duration: 0.4,
    stagger: 0.06,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.hours__table',
      start: 'top 80%',
    }
  });
}

/* ── Contact Section ────────────────────── */
function initContactAnimations() {
  gsap.from('.contact__info > *', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%',
    }
  });

  gsap.from('.contact__map', {
    opacity: 0,
    scale: 0.96,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact__map',
      start: 'top 80%',
    }
  });
}

/* ── Footer ─────────────────────────────── */
function initFooterAnimations() {
  gsap.from('.footer__inner > *', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 95%',
    }
  });
}

/* ── Sticky Header ──────────────────────── */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  ScrollTrigger.create({
    start: 80,
    onUpdate: (self) => {
      header.classList.toggle('scrolled', self.progress > 0 || window.scrollY > 80);
    }
  });

  // Also check immediately
  if (window.scrollY > 80) header.classList.add('scrolled');
}

/* ── Mobile Navigation ──────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
    hamburger.classList.toggle('open', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggle);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { if (isOpen) toggle(); });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) toggle();
  });
}

/* ── Smooth Anchor Scroll ───────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── Menu Card Hover Effect ─────────────── */
function initMenuHover() {
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.01, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });
}


/* ── INIT ALL ───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initStickyHeader();
  initMobileNav();
  initSmoothScroll();
  initHeroParallax();
  initAboutAnimations();
  initMenuAnimations();
  initTestimonialAnimations();
  initHoursAnimations();
  initContactAnimations();
  initFooterAnimations();
  initMenuHover();
});
