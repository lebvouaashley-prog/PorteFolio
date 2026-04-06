// ── CURSEUR CUSTOM ───────────────────
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

document.addEventListener('mousemove', (e) => {
  cursor.style.left    = e.clientX + 'px';
  cursor.style.top     = e.clientY + 'px';
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top  = e.clientY + 'px';
});

// Agrandir le curseur sur les éléments cliquables
document.querySelectorAll('a, button, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width       = '60px';
    cursor.style.height      = '60px';
    cursor.style.borderColor = '#60c8f0';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width       = '36px';
    cursor.style.height      = '36px';
    cursor.style.borderColor = '#c8f060';
  });
});

// ── APPARITION AU SCROLL ─────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-item, .skill-block, .about-text, .contact-inner')
  .forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    observer.observe(el);
  });