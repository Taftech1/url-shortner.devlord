let opener = document.getElementById("menu-icon");
let container = document.querySelector(".links-con");
let bodycontainer = document.getElementById("offcanvas");
//////
let closer = document.getElementById("close");

opener.addEventListener("click", display);
function display() {
  container.style.display = "block";
  container.style.transition = "all 1s";
  bodycontainer.style.transform = "translateX(-250px)";
  bodycontainer.style.transition = "all 1s";
  bodycontainer.style.overflow = "hidden";
  opener.style.display = "none";
  closer.style.display = "block";
  closer.style.transition = "all 1s";
}

closer.addEventListener("click", disable);
function disable() {
    bodycontainer.style.transform = "none";
     bodycontainer.style.overflow = "auto";
  container.style.display = "none";
  closer.style.display = "none";
  opener.style.display = "block";
}
