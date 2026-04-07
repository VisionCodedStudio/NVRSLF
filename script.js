// =========================
// MOBILE NAV TOGGLE
// =========================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =========================
// 🔥 SCROLL ANIMATIONS
// =========================
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 🔥 FORCE HERO TO SHOW ON LOAD
window.addEventListener("load", () => {
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('show');
  });
});

// =========================
// 🔥 HERO PARALLAX
// =========================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (!hero) return;

  let scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
});
