window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  // Efecto de scroll con fondo difuminado

  if (window.scrollY > 1) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // Resaltar enlaces activos
  let current = "";
  const scrollPos = window.scrollY;

  sections.forEach((section) => {
    const top = section.offsetTop - 150;
    if (scrollPos >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}` || (current === "" && link.getAttribute("href") === "#top")) {
      link.classList.add("active");
    }
  });
});