let menuBtn = document.getElementById("menu-icon");
let navElement = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", ()=>{
    if (menuBtn.classList.contains("menu")) {
    menuBtn.classList.remove("menu");
    menuBtn.classList.add("close");
    navElement.style.display = "none";
  } else if (menuBtn.classList.contains("close")) {
    menuBtn.classList.add("menu");
    menuBtn.classList.remove("close");
    navElement.style.display = "block";
  }
});

