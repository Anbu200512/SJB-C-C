// main.js - Main application logic
document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
  initSearchFunctionality();
  initBlogCategories();
  initScrollAnimations();
});

// Form validation
function initFormValidation() {
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      const inputs = this.querySelectorAll('[required]');

      inputs.forEach(input => {
        const errorEl = input.parentElement.querySelector('.error-message');
        if (errorEl) errorEl.remove();
        input.classList.remove('border-red-500');

        if (!input.value.trim()) {
          valid = false;
          input.classList.add('border-red-500');
          const msg = document.createElement('span');
          msg.className = 'error-message text-red-500 text-xs mt-1 block';
          msg.textContent = 'This field is required';
          input.parentElement.appendChild(msg);
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          valid = false;
          input.classList.add('border-red-500');
          const msg = document.createElement('span');
          msg.className = 'error-message text-red-500 text-xs mt-1 block';
          msg.textContent = 'Please enter a valid email';
          input.parentElement.appendChild(msg);
        } else if (input.type === 'tel' && !/^[\d\s+()-]{10,}$/.test(input.value)) {
          valid = false;
          input.classList.add('border-red-500');
          const msg = document.createElement('span');
          msg.className = 'error-message text-red-500 text-xs mt-1 block';
          msg.textContent = 'Please enter a valid phone number';
          input.parentElement.appendChild(msg);
        }
      });

      if (valid) {
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
          btn.classList.add('bg-green-500');
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.remove('bg-green-500');
            this.reset();
          }, 2000);
        }, 1500);
      }
    });
  });
}

// Blog search
function initSearchFunctionality() {
  const searchInput = document.getElementById('blog-search');
  const blogCards = document.querySelectorAll('.blog-card');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    blogCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('p')?.textContent.toLowerCase() || '';
      if (title.includes(query) || excerpt.includes(query)) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.opacity = '0';
        setTimeout(() => { card.style.display = 'none'; }, 300);
      }
    });
  });
}

// Blog categories
function initBlogCategories() {
  const catBtns = document.querySelectorAll('.blog-cat-btn');
  const blogCards = document.querySelectorAll('.blog-card');

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-700');
      });
      btn.classList.add('bg-amber-500', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700');

      const cat = btn.getAttribute('data-category');
      blogCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

// Scroll-triggered reveal for elements
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

// Get current year for copyright
document.querySelectorAll('.current-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});