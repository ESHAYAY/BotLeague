// BotLeague — basic front-end interactivity

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for in-page nav links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Register / sign-up buttons — placeholder action
  document.querySelectorAll('.btn-reg, .btn-eco, .btn-yellow, .btn-big.yellow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = btn.closest('.eco-card');
      if (card) {
        const nameInput = card.querySelector('input[type="text"]');
        if (nameInput && !nameInput.value.trim()) {
          nameInput.focus();
          return;
        }
      }
      alert('Thanks for your interest! This is a demo — hook this button up to your backend or form service to collect submissions.');
    });
  });

  // Login button — placeholder action
  const loginBtn = document.querySelector('.btn-outline');
  if (loginBtn) {
    loginBtn.addEventListener('click', function () {
      alert('Login flow goes here.');
    });
  }

});