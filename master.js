function openMenu() {
  document.getElementById("wrapper").style.right = "0%";
  document.getElementById("menu").style.opacity = "1";
  document.querySelector(".menu-icon").style.display = "none";
  document.getElementById("photo-me").style.display = "none";
  document.getElementById("skillHeader").style.display = "none";
  document.getElementById("aboutHeader").style.display = "none";
  document.querySelector(".content").style.display = "none";
  document.querySelector(".skill-wrapper").style.display = "none";
  document.querySelector(".aboutWrapper").style.display = "none";

  const nodeList = document.querySelectorAll("#dynamicOpacity");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.opacity = "0";
    nodeList[i].style.transition = "all 100ms ease";
  }
}
function closeMenu() {
  document.getElementById("wrapper").style.right = "-100%";
  document.getElementById("menu").style.opacity = "0";
  document.querySelector(".menu-icon").style.display = "initial";
  document.getElementById("photo-me").style.display = "initial";
  document.getElementById("skillHeader").style.display = "initial";
  document.getElementById("aboutHeader").style.display = "initial";
  document.querySelector(".content").style.display = "initial";
  document.querySelector(".skill-wrapper").style.display = "flex";
  document.querySelector(".aboutWrapper").style.display = "flex";

  const nodeList = document.querySelectorAll("#dynamicOpacity");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.opacity = "1";
    nodeList[i].style.transition = "all 1.5s ease";
  }
}
