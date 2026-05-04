const NAV_HTML = `
<div class="topbar">
  <div class="topbar-inner">
    <span>Mon–Sat: 11:00 AM – 6:00 PM | Islamabad, Pakistan</span>
    <div class="top-links">
      <a href="mailto:solution360int@gmail.com">✉ solution360int@gmail.com</a>
      <a href="/whatsapp">📞 +92 314 444 1280</a>
    </div>
  </div>
</div>
<nav id="navbar">
  <div class="nav-inner">
    <a href="/" class="logo">
      <div class="logo-icon">S3</div>
      <div class="logo-text">Solutions 360<span>Study Abroad Consultants</span></div>
    </a>
    <button class="nav-toggle" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/countries">Countries</a></li>
      <li><a href="/courses">Courses</a></li>
      <li><a href="/success-stories">Success Stories</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/whatsapp" class="nav-cta">Free Counselling</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="f-logo">Solutions 360<span>Study Abroad Consultants</span></div>
      <p>Pakistan's trusted study abroad consultancy helping students achieve their dreams of international education. Based in Islamabad.</p>
      <div class="social-links">
        <a href="/whatsapp" class="social-btn">WhatsApp</a>
        <a href="mailto:solution360int@gmail.com" class="social-btn">Email Us</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Quick Links</h5>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      </div>
  </div>
  <div class="footer-bottom">
    <p>Solutions 360 © 2026. All rights reserved.</p>
    <span class="footer-badge">TRUSTED CONSULTANTS</span>
  </div>
</footer>`;

function injectLayout() {
  document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
  document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', injectLayout);
