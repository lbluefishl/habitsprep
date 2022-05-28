

function openTab(evt, tabName) {
  var i, x, tabs;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tabbutton");
  for (i = 0; i < x.length; i++) {
    tabs[i].className = tabs[i].className.replace(" highlighted", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " highlighted";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
  
    }
  }
}

function reveal_left() {
  var reveals = document.querySelectorAll(".reveal-left");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
     
    }
  }
}

function reveal_right() {
  var reveals = document.querySelectorAll(".reveal-right");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
     
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

window.addEventListener("scroll", reveal_left);
reveal_left();

window.addEventListener("scroll", reveal_right);
reveal_right();