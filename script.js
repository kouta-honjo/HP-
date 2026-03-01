// Smooth scroll for hash links if nav is added later.
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLAnchorElement)) return;
  const href = target.getAttribute("href") || "";
  if (!href.startsWith("#")) return;

  const section = document.querySelector(href);
  if (!section) return;

  event.preventDefault();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});

const siteMenu = document.querySelector(".site-menu");
const newsSection = document.querySelector("#news");

if (siteMenu instanceof HTMLElement && newsSection instanceof HTMLElement) {
  const syncMenuLayer = () => {
    const menuHeight = siteMenu.offsetHeight;
    const newsTop = newsSection.getBoundingClientRect().top;
    siteMenu.classList.toggle("is-on-hero", newsTop > menuHeight);
  };

  syncMenuLayer();
  window.addEventListener("scroll", syncMenuLayer, { passive: true });
  window.addEventListener("resize", syncMenuLayer);
}
