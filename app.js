const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})


function toggleSection() {
    var x = document.getElementById("learn_more");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



