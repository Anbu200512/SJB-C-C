// nav.js - Navbar functionality
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky navbar on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl', 'shadow-black/10');
      navbar.classList.remove('bg-transparent');
    } else {
      if (!mobileMenu.classList.contains('translate-x-0')) {
        navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-xl', 'shadow-xl', 'shadow-black/10');
        navbar.classList.add('bg-transparent');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('bg-white/10', 'text-amber-400');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    document.body.style.overflow = '';
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('translate-x-0')) {
      closeMobileMenu();
    }
  });
});