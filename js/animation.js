// animation.js - GSAP & AOS animations (mobile-optimized)
function initAnimations() {
  // Detect mobile for lighter animations
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        if (prefersReducedMotion) {
          counter.textContent = target + suffix;
          counterObserver.unobserve(counter);
          return;
        }
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + suffix;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + suffix;
          }
        }, 30);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // Scroll progress
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          scrollProgress.style.width = (window.scrollY / h * 100) + '%';
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  // Skip heavy GSAP animations on mobile for performance
  if (prefersReducedMotion) return;

  // GSAP animations if available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax sections (desktop only)
    if (!isMobile) {
      gsap.utils.toArray('.parallax-section').forEach(section => {
        const bg = section.querySelector('.parallax-bg');
        if (bg) {
          gsap.to(bg, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }

    // Reduce animation distances on mobile
    const fadeY = isMobile ? 20 : 40;
    const slideX = isMobile ? 30 : 60;

    // Fade in animations
    gsap.utils.toArray('.gsap-fade-up').forEach(el => {
      gsap.from(el, {
        y: fadeY,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });

    gsap.utils.toArray('.gsap-fade-left').forEach(el => {
      gsap.from(el, {
        x: -slideX,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });

    gsap.utils.toArray('.gsap-fade-right').forEach(el => {
      gsap.from(el, {
        x: slideX,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });

    gsap.utils.toArray('.gsap-scale').forEach(el => {
      gsap.from(el, {
        scale: isMobile ? 0.95 : 0.8,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });

    // Stagger children (simpler on mobile)
    gsap.utils.toArray('.gsap-stagger').forEach(container => {
      const children = container.children;
      gsap.from(children, {
        y: isMobile ? 15 : 30,
        opacity: 0,
        duration: isMobile ? 0.4 : 0.6,
        stagger: isMobile ? 0.08 : 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });

    // Timeline animation
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        x: isMobile ? 0 : (i % 2 === 0 ? -50 : 50),
        y: isMobile ? 20 : 0,
        opacity: 0,
        duration: isMobile ? 0.5 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // Button ripple effect (skip on mobile for performance)
  if (!isMobile) {
    document.querySelectorAll('.btn-ripple').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // Add ripple keyframe
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `@keyframes ripple{to{transform:scale(4);opacity:0}}`;
    document.head.appendChild(style);
  }
}

// FAQ accordion - touch-friendly
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      // Close all
      faqItems.forEach(other => {
        const otherAnswer = other.querySelector('.faq-answer');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherAnswer) {
          otherAnswer.style.maxHeight = '0px';
          otherAnswer.style.opacity = '0';
        }
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        other.classList.remove('bg-amber-50', 'border-amber-500');
        other.classList.add('bg-white', 'border-slate-100');
      });

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        if (icon) icon.style.transform = 'rotate(180deg)';
        item.classList.add('bg-amber-50', 'border-amber-500');
        item.classList.remove('bg-white', 'border-slate-100');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initFAQ();
});