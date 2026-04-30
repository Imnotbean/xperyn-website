// FAQ toggle
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.cap-card, .who-card, .mission-card, .about-body, .stat, .section-title, .section-desc, .how-step, .coming-card, .building-card, .diff-col, .pillar, .stats-card, .demo-video-wrap, .new-feature-banner'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Stagger animations
document.querySelectorAll('.cap-card').forEach((el, i) => { el.style.transitionDelay = `${i * 60}ms`; });
document.querySelectorAll('.who-card').forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; });
document.querySelectorAll('.coming-card').forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; });
document.querySelectorAll('.building-card').forEach((el, i) => { el.style.transitionDelay = `${i * 60}ms`; });
document.querySelectorAll('.stats-card').forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; });

// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:80px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.95);padding:24px;gap:20px;border:1px solid rgba(0,0,0,0.08);border-radius:16px;backdrop-filter:blur(20px);min-width:200px;align-items:center;box-shadow:0 8px 32px rgba(0,0,0,0.08)';
  navCta.style.display = open ? '' : 'none';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => { navLinks.style.cssText = ''; });
});

// Early access form
async function handleEarlyAccess(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('early-success').style.display = 'flex';
    } else {
      btn.textContent = 'Try again';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Try again';
    btn.disabled = false;
  }
}
