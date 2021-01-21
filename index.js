const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

a.forEach(element => {
    element.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        element.classList.add('active');
    });
});





