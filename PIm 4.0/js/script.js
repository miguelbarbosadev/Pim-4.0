document.addEventListener("DOMContentLoaded", function () {

  var botao = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");

  botao.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });

});
