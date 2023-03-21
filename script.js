// mobileMenu
const mobileMenu = document.querySelector('.mob-menu');
function openNav() {
  if(mobileMenu.style.width === "300px"){
    mobileMenu.style.width = "0px";
  }else{
    mobileMenu.style.width = "300px";
  }

}


function myHidden() {
  mobileMenu.style.width = "0px";
}



const mobileSubMenu = document.querySelector('.msub-menu');
const mobileSubMenu2 = document.querySelector('.msub-menu2');

function openSubMenu(z){
  z.classList.toggle('arrow-up');
  if(mobileSubMenu.style.height === "125px"){
    mobileSubMenu.style.height = "0px";
  }else{
    mobileSubMenu.style.height = "125px";
  }
}

function openSubMenu2(y){
  y.classList.toggle('arrow-up2');
  if(mobileSubMenu2.style.height === "125px"){
    mobileSubMenu2.style.height = "0px";
  }else{
    mobileSubMenu2.style.height = "125px";
  }
}