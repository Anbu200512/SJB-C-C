// footer.js - Footer component loader
document.addEventListener('DOMContentLoaded', () => {
  // Load navbar
  fetchNavbar();
  // Load footer
  fetchFooter();
  // Init back to top
  initBackToTop();
  // Init scroll progress
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

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
    } else {
      if (!mobileMenu || !mobileMenu.classList.contains('translate-x-0')) {
        navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('bg-white/10', 'text-amber-400');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    document.body.style.overflow = '';
  }

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(l => l.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('translate-x-0')) closeMobileMenu();
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('opacity-100', window.scrollY > 500);
    btn.classList.toggle('invisible', window.scrollY <= 500);
    btn.classList.toggle('opacity-0', window.scrollY <= 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = (window.scrollY / h) * 100;
    bar.style.width = p + '%';
  });
}