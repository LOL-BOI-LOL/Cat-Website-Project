const mediaQuery = window.matchMedia('(max-width: 599px)');
document.getElementById('txtDropDown').addEventListener("click", toggleMenu);
function toggleMenu() {
  if(mediaQuery.matches) {
    links = document.getElementById('divLinks').childNodes;
    state = window.getComputedStyle(links[1]).display;
    if(state == 'none') {
      state = 'block';
    }else if(state == 'block') {
      state = 'none';
    }
    for(i = 1; i < 6; i += 2) {
      links[i].style.display = state;
    }
  }
}