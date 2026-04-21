/* main.js — minimal portfolio interactions */

// ── Navbar: add .scrolled class after user scrolls ──────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}


// ── Navbar: mark active link based on scroll position ────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.navbar__link[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  { rootMargin: '-50% 0px -45% 0px' }
);

sections.forEach((section) => observer.observe(section));
