function hamberger_header() {
  let btn = document.querySelector(".btn-hamberger");
  let toggle = document.querySelector(".header_menu");
  btn.onclick = function () {
    toggle.classList.toggle("is-active");
    btn.classList.toggle("is-active");
  };
  window.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !e.target.matches(".btn-hamberger")) {
      toggle.classList.remove("is-active");
    }
  });
}

hamberger_header();
