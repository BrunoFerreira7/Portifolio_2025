// Ano atual
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger && burger.addEventListener('click', () => mobileNav.classList.toggle('open'));

// Tema claro/escuro com persistência
// const themeToggle = document.getElementById('themeToggle');
// const root = document.documentElement;
// const storageKey = 'theme';

// function setTheme(mode){
//   if(mode === 'light'){
//     root.style.setProperty('--bg','##dbe2ff');
//     root.style.setProperty('--panel','##dbe2ff');
//     root.style.setProperty('--muted','#475569');
//     root.style.setProperty('--text','##dbe2ff');
//     root.style.setProperty('--card','#ffffff');
//     localStorage.setItem(storageKey,'light');
//   } else {
//     root.style.setProperty('--bg','#0b1220');
//     root.style.setProperty('--panel','#0f172a');
//     root.style.setProperty('--muted','#94a3b8');
//     root.style.setProperty('--text','#e2e8f0');
//     root.style.setProperty('--card','#111827');
//     localStorage.setItem(storageKey,'dark');
//   }
// }

// const saved = localStorage.getItem(storageKey);
// if(saved) setTheme(saved);

// themeToggle && themeToggle.addEventListener('click', () => {
//   const mode = localStorage.getItem(storageKey) === 'light' ? 'dark' : 'light';
//   setTheme(mode);
// });