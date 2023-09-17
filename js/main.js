// navigation part 

const nav = document.querySelector('.navigation');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 80)
    {
        nav.classList.add('navigation-scrolled');
    }

    else if(window.scrollY <= 80)
    {
        nav.classList.remove('navigation-scrolled');
    }
}) 

// ham button part 
let hambtn = document.querySelector(".hambtn");
let midnav = document.querySelector(".mid-nav");
let navitem = document.querySelector('.nav-items');
let crossicon = document.querySelector(".fa-xmark");
let hamicon = document.querySelector(".fa-bars");

hambtn.addEventListener("click",  ()=> {
  if(crossicon.style.display === "none"){
    crossicon.style.display = "block";
    hamicon.style.display = "none";
    midnav.style.display="block";
    navitem.style.flexDirection="column";
    nav.style.alignItems="flex-start";
    // navitem.style.paddingTop="10px";
  } 
  else {
    crossicon.style.display = "none";
    hamicon.style.display = "block";
    midnav.style.display="none";
  }
});

// aos plugin 
AOS.init({
    offset: 150,
    delay: 0,
    duration: 600, 
});