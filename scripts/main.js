const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const details1 = document.querySelector('h2.left');
const details2 = document.querySelector('h2.right');
const button1 = document.querySelector('#button1'); 
const button2 = document.querySelector('#button2'); 

var typed = new Typed('.auto-type', {
    strings: ['Research-based, Experience-backed Principles.'],
    typeSpeed: 20,
    backSpeed: 2,
    loop: true,
    startDelay: 1000,
  });

var typed2 = new Typed('.auto-type2', {
    strings: ['ACT, SAT, and AP questions from official tests, organized by topic.', 'Comprehensive explanations and progress-tracking.'],
    typeSpeed: 20,
    backSpeed: 2,
    loop: true,
    startDelay: 1000,
  });




left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
        details1.style.display = 'block';
     button1.style.display = 'block';
     button1.classList.add('fade-in')
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    details1.style.display = 'none';
    typed.reset();
    typed2.reset();
    button1.style.display = 'none';
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    details2.style.display = 'block';
    button2.style.display = 'block';
    button2.classList.add('fade-in')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    details2.style.display = 'none';
    typed.reset();
    typed2.reset();
    button2.style.display = 'none';

});






