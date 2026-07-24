// main.js - Main application logic
document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
  initScrollAnimations();
});

// Form validation - mobile-friendly
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
      } else {
        // Scroll to first error on mobile
        const firstError = this.querySelector('.border-red-500');
        if (firstError && window.innerWidth < 768) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
      }
    });
  });
}

// Scroll-triggered reveal for elements
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}