// !!!!!!!!!!!!!NAVBAR STUFF!!!!!!!!!!!!!!!!!!

// Slide Out Sidebar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Gallery Button Drop Down Menu
var button = document.querySelector(".gallery-listitem");
button.onmouseenter = setButtonStatusEnter;
button.onmouseleave = setButtonStatusLeave;
button.isMouseOver = false;

var dropdown = document.querySelector(".gallery-dropdown");
dropdown.onmouseenter = setDropdownStatusEnter;
dropdown.onmouseleave = setDropdownStatusLeave;
dropdown.isMouseOver = false;

function setButtonStatusEnter() {
  button.isMouseOver = true;
  dropdown.isMouseOver = false;
  galleryMenuCheck();
}

function setButtonStatusLeave() {
  button.isMouseOver = false;
  setTimeout(galleryMenuCheck, 100);
}

function setDropdownStatusEnter() {
  dropdown.isMouseOver = true;
  button.isMouseOver = false;
}

function setDropdownStatusLeave() {
  dropdown.isMouseOver = false;
  galleryMenuCheck();
}

function galleryMenuShow() {
    let rect = button.getBoundingClientRect();
    let literal = `${rect.x}px`;
    dropdown.style.left = literal;
    dropdown.style.display = "inline-block";
}

function galleryMenuHide() {
  dropdown.style.display = "none";
}

function galleryMenuCheck() {

  if(button.isMouseOver || dropdown.isMouseOver) {
    galleryMenuShow();
  }

  if (!button.isMouseOver && !dropdown.isMouseOver) {
    galleryMenuHide();
  } 
}

function sideGalleryDropDown() {
  let menu = document.querySelector(".side-drop-menu");
  if (menu.classList.contains("side-drop-close")) {
    menu.classList.remove("side-drop-close");
    menu.classList.remove("side-drop-disappear");
    menu.classList.add("side-drop-open");
  }
  else if (menu.classList.contains("side-drop-open")) {
    menu.classList.remove("side-drop-open");
    menu.classList.add("side-drop-close");
    setTimeout(sideGalleryDisappear, 600);
  }

  let menuItems = document.querySelectorAll(".drop-menu-item");
  menuItems.forEach((item) => {
    if (item.classList.contains("menu-item-close")) {
      item.classList.remove("menu-item-close");
      item.classList.add("menu-item-open");
    } 
    else if (item.classList.contains("menu-item-open")) {
      item.classList.remove("menu-item-open");
      item.classList.add("menu-item-close");
    }
  })
}

function sideGalleryDisappear() {
  let menu = document.querySelector(".side-drop-menu");
  menu.classList.add("side-drop-disappear");
}