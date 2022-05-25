const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const details1 = document.querySelector('h2.left');
const details2 = document.querySelector('h2.right');




left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
        details1.style.display = 'block';
        details1.classList.add('auto-type')
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    details1.style.display = 'none';
    details1.classList.remove('auto-type')

});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    details2.style.display = 'block';
    details2.classList.add('auto-type2')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    details2.style.display = 'none';
    details2.classList.remove('auto-type2')
});


