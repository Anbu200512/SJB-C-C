// footer.js - Component loader with mobile-first navbar/footer
document.addEventListener('DOMContentLoaded', () => {
  fetchNavbar();
  fetchFooter();
  initBackToTop();
  initScrollProgress();
});

async function fetchNavbar() {
  const navbarEl = document.getElementById('navbar-placeholder');
  if (!navbarEl) return;
  try {
    const base = getBasePath();
    const resp = await fetch(base + 'components/navbar.html');
    if (!resp.ok) return;
    const html = await resp.text();
    navbarEl.outerHTML = html;
    setTimeout(() => initNavbarJS(), 100);
  } catch (e) { console.warn('Navbar load failed', e); }
}

async function fetchFooter() {
  const footerEl = document.getElementById('footer-placeholder');
  if (!footerEl) return;
  try {
    const base = getBasePath();
    const resp = await fetch(base + 'components/footer.html');
    if (!resp.ok) return;
    const html = await resp.text();
    footerEl.outerHTML = html;
  } catch (e) { console.warn('Footer load failed', e); }
}

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/css/') || path.includes('/js/')) return '../';
  return '';
}

function initNavbarJS() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!navbar) return;

  // ── Sticky navbar background ──
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
    } else if (!isMenuOpen()) {
      navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('bg-white/10', 'text-amber-400');
    }
  });

  // ── Mobile menu state ──
  let savedScrollY = 0;

  function isMenuOpen() {
    return menu && menu.classList.contains('is-open');
  }

  function openMenu() {
    if (!menu || !menuBtn) return;

    // Save scroll position before locking
    savedScrollY = window.scrollY;

    // Show overlay
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100', 'pointer-events-auto', 'is-open');
    menu.setAttribute('aria-hidden', 'false');

    // Hamburger → X
    menuBtn.classList.add('is-active');
    menuBtn.setAttribute('aria-expanded', 'true');

    // Lock body — iOS-safe: set position fixed with negative top
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + savedScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    // Stagger animate nav links
    const links = menu.querySelectorAll('.mobile-nav-link');
    links.forEach((link, i) => {
      link.style.transitionDelay = (0.05 + i * 0.04) + 's';
    });
  }

  function closeMenu() {
    if (!menu || !menuBtn) return;

    // Hide overlay
    menu.classList.remove('opacity-100', 'pointer-events-auto', 'is-open');
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.setAttribute('aria-hidden', 'true');

    // X → hamburger
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');

    // Unlock body
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    // Restore scroll position
    window.scrollTo(0, savedScrollY);

    // Reset link delays
    const links = menu.querySelectorAll('.mobile-nav-link');
    links.forEach(link => {
      link.style.transitionDelay = '0s';
    });
  }

  // ── Button events ──
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      isMenuOpen() ? closeMenu() : openMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // ── Close on link tap ──
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ── Close on Escape ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) closeMenu();
  });

  // ── Close on resize to desktop ──
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && isMenuOpen()) closeMenu();
  });

  // ── Block background scroll when menu open (iOS) ──
  document.addEventListener('touchmove', (e) => {
    if (isMenuOpen() && !menu.contains(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
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
      window.requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (window.scrollY / h * 100) + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}