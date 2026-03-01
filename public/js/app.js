/* ===== Lab Homepage Template - Common JavaScript ===== */

// --- Shared Header Injection ---
// Customization: Update the logo image, sub-text, and main-text below
function injectHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navItems = [
    { href: 'index.html', label: 'Home' },
    { href: 'research.html', label: 'Research' },
    { href: 'members.html', label: 'Members' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const navHTML = navItems
    .map(item => {
      const active = currentPage === item.href ? ' class="active"' : '';
      return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
    })
    .join('');

  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="header-logo" style="text-decoration:none;">
          <img src="img/logo.png" alt="Logo" class="header-crest">
          <div class="header-logo-text">
            <span class="header-logo-sub">【大学名】 【研究科名】 【プログラム名】</span>
            <span class="header-logo-main">【研究室名】</span>
          </div>
        </a>
        <button class="nav-toggle" aria-label="メニュー" onclick="toggleNav()">&#9776;</button>
        <nav>
          <ul class="header-nav" id="nav-menu">${navHTML}</ul>
        </nav>
      </div>
    </header>
  `;
}

// --- Shared Footer Injection ---
// Customization: Update the lab name, affiliation, and address below
function injectFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <img src="img/logo.png" alt="Logo" class="footer-crest">
        <div class="footer-info">
          <strong>【研究室名】</strong><br>
          【大学名】 【研究科名】 【プログラム名】<br>
          【郵便番号・住所】
        </div>
        <div class="footer-copy">&copy; ${new Date().getFullYear()} Your Lab Name, Your University.</div>
      </div>
    </footer>
  `;
}

// --- Mobile Nav Toggle ---
function toggleNav() {
  const menu = document.getElementById('nav-menu');
  if (menu) menu.classList.toggle('open');
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});
