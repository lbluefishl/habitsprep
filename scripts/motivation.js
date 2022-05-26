

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