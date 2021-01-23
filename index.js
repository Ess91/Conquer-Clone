//Highlights Link dependent of current Section

const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

a.forEach(element => {
    element.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        element.classList.add('active');
    });
});

//Scroll to Top 

const buttonToTop = document.querySelector('.btn');

const goToTop = () => {
    scrollTo(top);
  };
  
  const showTopButton = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      buttonToTop.classList.remove('btn-hidden');
    } else {
      buttonToTop.classList.add('btn-hidden');
    }
  };
  
  buttonToTop.addEventListener('click', goToTop);
  
  window.addEventListener('scroll', showTopButton);

  //Mobile Menu - Hamburger

 

  const navbar = document.querySelector(".nav-wrapper")
const ham = document.querySelector(".ham")

ham.addEventListener("click", toggleMenu)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleMenu(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu) 
  }
)