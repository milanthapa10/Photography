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
  if (midnav.style.display === "none") {
    midnav.style.display = "flex";
    navitem.style.flexDirection="column";
    hamicon.style.display = "none";
    crossicon.style.display = "block";
  } else {
    midnav.style.display = "none";
    crossicon.style.display = "none";
    hamicon.style.display = "block";
  }
});

// aos plugin 
AOS.init({
    offset: 150,
    delay: 0,
    duration: 600, 
});