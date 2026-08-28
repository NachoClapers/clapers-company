document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('visible');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
