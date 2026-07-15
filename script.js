// Toggle menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const icon = menuBtn.querySelector('i');
 
menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('-translate-x-full') === false;
  mobileMenu.classList.toggle('-translate-x-full');
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
 
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !mobileMenu.classList.contains('-translate-x-full')) {
    mobileMenu.classList.add('-translate-x-full');
    menuBtn.setAttribute('aria-expanded', 'false');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }
});