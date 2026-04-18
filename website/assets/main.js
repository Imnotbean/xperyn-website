// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.cap-card, .who-card, .mission-card, .about-body, .stat, .section-title, .section-desc, .platform-image-wrap'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Stagger cap cards
document.querySelectorAll('.cap-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});

document.querySelectorAll('.who-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:rgba(8,8,8,0.97);padding:24px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.07);backdrop-filter:blur(20px)';
  navCta.style.display = open ? '' : 'none';
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.cssText = '';
  });
});
