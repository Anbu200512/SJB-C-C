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
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!navbar) return;

  // Sticky navbar on scroll
  let lastScroll = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
    } else {
      if (!mobileMenu || !mobileMenu.classList.contains('translate-x-0')) {
        navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
      }
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('bg-white/10', 'text-amber-400');
    }
  });

  // Store scroll position for iOS-safe lock
  let scrollPos = 0;

  // Mobile menu open
  function openMobileMenu() {
    if (!mobileMenu) return;

    // Save scroll position
    scrollPos = window.scrollY || document.documentElement.scrollTop;

    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');

    // Lock body scroll - iOS safe method
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPos + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
  }

  // Mobile menu close
  function closeMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');

    // Unlock body scroll - restore position
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    // Restore scroll position
    window.scrollTo(0, scrollPos);
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileMenu.classList.contains('translate-x-0')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Small delay so the navigation starts before menu closes
      setTimeout(closeMobileMenu, 50);
    });
  });

  // Close on escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
      closeMobileMenu();
    }
  });

  // Close on resize to desktop
  const mql = window.matchMedia('(min-width: 1024px)');
  mql.addEventListener('change', (e) => {
    if (e.matches && mobileMenu.classList.contains('translate-x-0')) {
      closeMobileMenu();
    }
  });

  // Prevent touchmove scrolling on body when menu is open
  document.addEventListener('touchmove', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
      // Only prevent on the body/overlay, allow scrolling inside the menu content
      if (!mobileMenu.contains(e.target)) {
        e.preventDefault();
      }
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