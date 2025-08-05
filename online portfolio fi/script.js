const mobmenu = document.getElementById("mobmenu");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  mobmenu.classList.toggle("active");
});

document.querySelectorAll(".mob-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobmenu.classList.remove("active");
  });
});
