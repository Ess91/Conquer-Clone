const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

a.forEach(element => {
    element.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        element.classList.add('active');
    });
});

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


