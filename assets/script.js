// Tiny enhancements: year stamp + dark/light theme toggle with localStorage
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ root.classList.add('light'); }

  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
})();
