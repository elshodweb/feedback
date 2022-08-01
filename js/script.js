const btnMenu = document.querySelector(".aside__menu-icon");
if (btnMenu) {
   const menu = document.querySelector(".aside__responsiv");
   const menuWrapper = document.querySelector(".aside__wrapper");
   btnMenu.addEventListener("click", () => {
      btnMenu.classList.toggle("_active");
      menu.classList.toggle("_active");
      menuWrapper.classList.toggle("_active");
   })
}