// footer.js — Component loader + premium navbar + back-to-top + scroll progress
document.addEventListener('DOMContentLoaded', () => {
  fetchNavbar();
  fetchFooter();
  initBackToTop();
  initScrollProgress();
});

async function fetchNavbar() {
  const el = document.getElementById('navbar-placeholder');
  if (!el) return;
  try {
    const base = getBasePath();
    const resp = await fetch(base + 'components/navbar.html');
    if (!resp.ok) return;
    el.outerHTML = await resp.text();
    setTimeout(initNavbar, 50);
  } catch (e) { console.warn('Navbar load failed', e); }
}

async function fetchFooter() {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  try {
    const base = getBasePath();
    const resp = await fetch(base + 'components/footer.html');
    if (!resp.ok) return;
    el.outerHTML = await resp.text();
  } catch (e) { console.warn('Footer load failed', e); }
}

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/css/') || path.includes('/js/')) return '../';
  return '';
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu-btn');

  if (!navbar || !hamburger || !menu) return;

  let savedScrollY = 0;

  function isOpen() {
    return menu.classList.contains('is-open');
  }

  function openMenu() {
    savedScrollY = window.scrollY;

    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');

    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');

    document.body.classList.add('menu-open');
    document.body.style.top = '-' + savedScrollY + 'px';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');

    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');

    document.body.classList.remove('menu-open');
    document.body.style.top = '';

    window.scrollTo(0, savedScrollY);
  }

  // Hamburger
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    isOpen() ? closeMenu() : openMenu();
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
    });
  }

  // Close on link tap
  menu.querySelectorAll('.mobile-link, .cta-primary-mobile, .cta-call-mobile').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  // Resize to desktop
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && isOpen()) closeMenu();
  });

  // Block background scroll (iOS touch)
  document.addEventListener('touchmove', (e) => {
    if (isOpen() && !menu.querySelector('.mobile-menu-panel').contains(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });

  // ── Sticky navbar ──
  function handleScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Active nav link — desktop ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('data-page') || link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('is-active');
    }
  });

  // ── Active nav link — mobile ──
  document.querySelectorAll('.mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = '#F59E0B';
      link.style.background = 'rgba(245,158,11,0.08)';
      link.style.borderColor = 'rgba(245,158,11,0.12)';
      const icon = link.querySelector('i');
      if (icon) icon.style.color = '#F59E0B';
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const show = window.scrollY > 500;
        btn.classList.toggle('opacity-100', show);
        btn.classList.toggle('invisible', !show);
        btn.classList.toggle('opacity-0', !show);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}