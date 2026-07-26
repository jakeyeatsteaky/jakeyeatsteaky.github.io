
(function() {
  const HEADER_HTML = `
<header class="site-header">
  <div class="container">
    <a class="brand" href="/index.html">Jake Baker</a>
    <nav class="nav">
      <a href="/about.html">About</a>
      <a href="/writing.html">Writing</a>
      <a href="/personal.html">Personal</a>
    </nav>
    <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
      <img src="/images/test.png" alt="" class="theme-icon" />
    </button>
  </div>
</header>
`;

  const FOOTER_HTML = `  <footer class="site-footer">
    <div class="container">
      <small>© <span id="year"></span> Jake Baker.</small>
    </div>
  </footer>`;

  document.getElementById("site-footer").innerHTML = FOOTER_HTML;
  document.getElementById("site-header").innerHTML = HEADER_HTML;
})();

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

const hashText = async (value) => {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  return [...new Uint8Array(digest)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
};

(function(){
  const gate = document.querySelector('[data-personal-gate]');
  const content = document.querySelector('[data-personal-content]');
  const form = document.querySelector('[data-password-form]');
  const message = document.querySelector('[data-password-message]');

  if (!gate || !content || !form) return;

  const unlock = () => {
    gate.hidden = true;
    content.hidden = false;
    sessionStorage.setItem('personalUnlocked', 'true');
  };

  if (sessionStorage.getItem('personalUnlocked') === 'true') {
    unlock();
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const password = String(formData.get('password') || '');
    const expectedHash = '67bf836dbaa495cc8008b261bc76f8666fa4d7171c4909df737dec82914d4ac1';

    if (await hashText(password) === expectedHash) {
      unlock();
    } else if (message) {
      message.textContent = 'Nope.';
    }
  });
})();
