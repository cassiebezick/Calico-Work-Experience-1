const menuButton = document.querySelector(".home-nav-toggle");
const menu = document.querySelector("#home-nav");

menuButton.hidden = false;

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

menuButton.closest("header").addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true" &&
    menuButton.getClientRects().length > 0
  ) {
    setMenuOpen(false);
    menuButton.focus();
  }
});