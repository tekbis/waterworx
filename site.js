const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
function closeMenu() {
  links.classList.remove('show');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const open = links.classList.toggle('show');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && links.classList.contains('show')) { closeMenu(); menu.focus(); }
});
window.matchMedia('(min-width:1051px)').addEventListener('change', closeMenu);
const quote = document.querySelector('#quote');
quote.addEventListener('submit', event => {
  // Local files show a demo confirmation. Netlify handles real submissions when hosted.
  if (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    event.preventDefault();
    const status = quote.querySelector('.success');
    status.textContent = 'Preview only — your details have not been sent. The form will work after publishing on Netlify.';
    status.style.display = 'block';
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

// Gentle on-scroll movement without hiding content when motion is reduced.
const revealItems = document.querySelectorAll('.reveal');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) document.body.classList.add('motion-ready');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  }, {threshold: 0.08, rootMargin: '0px 0px 35px 0px'});
  revealItems.forEach(item => revealObserver.observe(item));
} else revealItems.forEach(item => item.classList.add('in-view'));

// Full-width photo slider. Pause during interaction and honor reduced motion.
const slider = document.querySelector('.hero-slider');
if (slider) {
  const slides = [...slider.querySelectorAll('.hero-slide')];
  const dots = [...slider.querySelectorAll('.slider-dot')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let timer;
  const showSlide = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
  };
  const stopSlider = () => clearInterval(timer);
  const startSlider = () => {
    stopSlider();
    if (!reduceMotion.matches && !document.hidden) timer = setInterval(() => showSlide(current + 1), 5500);
  };
  slider.querySelectorAll('[data-slide-direction]').forEach(button => button.addEventListener('click', () => {
    showSlide(current + Number(button.dataset.slideDirection)); startSlider();
  }));
  dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startSlider(); }));
  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);
  slider.addEventListener('focusin', stopSlider);
  slider.addEventListener('focusout', event => { if (!slider.contains(event.relatedTarget)) startSlider(); });
  document.addEventListener('visibilitychange', startSlider);
  reduceMotion.addEventListener('change', startSlider);
  startSlider();
}
