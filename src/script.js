
import { month_ } from './utils.js';

// js doesn't know file structure items from an IO perspective, so this is how
// you would have to fetch the data from that file (as a network request)
const fetchHeader = () => {
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
    });
}
//fetchHeader();



// you could also store as a var (just copied from that file)
// and assign it this way. but i guess this would be less maintainable
(function() {
  const HEADER_HTML = `
<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html">Please take off your shoes before entering</a>
    <nav class="nav">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="posts/posts-aggregate.html">Ideas</a>
    </nav>
    <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
      <img src="/images/test.png" alt="" class="theme-icon" />
    </button>
  </div>
</header>
`;
  document.getElementById("site-header").innerHTML = HEADER_HTML;
})();

(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const monthEl = document.getElementById('month');
  if (monthEl) monthEl.textContent = month_(new Date().getMonth());

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

