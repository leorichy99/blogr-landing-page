const dropDownHeadsDesktop = document.querySelectorAll(".drop-down-head");
const dropDownHeadsMobile = document.querySelectorAll(".m-drop-down-head");

const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector(".menu");

dropDownHeadsDesktop.forEach(head => {
  head.addEventListener("click", () => head.classList.toggle('clicked'));
})

dropDownHeadsMobile.forEach((mobileHead) => {
  mobileHead.addEventListener("click", () => {
    mobileHead.classList.toggle('clicked');
    mobileHead.parentElement.classList.toggle('show');
  });
});

hamburgerIcon.addEventListener("click", (e) => {
  menu.classList.toggle('show');

//change the hamburger icon to the close icon when 'show' is added to 'menu' 
  if (menu.classList.length > 1) {
    hamburgerIcon.src = `./images/icon-close.svg`;
  } else {
    hamburgerIcon.src = `./images/icon-hamburger.svg`;
  }
});
