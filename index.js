const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

a.forEach(element => {
    element.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        element.classList.add('active');
    });
});


const btnToTop = () => {
    scrollTo(top);
  };
  
  const showTopButton = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      buttonToTop.classList.remove('btn-hidden');
    } else {
      buttonToTop.classList.add('button-to-top_hidden');
    }
  };
  
  buttonToTop.addEventListener('click', goToTop);
  
  window.addEventListener('scroll', showToTopButton);


//const button = document.querySelector('.btn');

//button.addEventListener('click', function (){
    //window.scrollTo(0,0)

  //  window.scrollTo({
    //    top: 0,
      //  left: 0,
       // behavior: "smooth"
   // });
//});
