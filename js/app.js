const img = document.querySelector("header img");
window.addEventListener("scroll", () => {
  img.style.opacity = 1 - +(window.scrollY / window.innerHeight);
});
