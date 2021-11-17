const mediaQuery = window.matchMedia('(max-width: 599px)');
const divTopPH = document.getElementById('divTitlePlaceHolder');
const divTop = document.getElementById('divTop');
document.getElementById('txtDropDown').addEventListener("click", toggleDropDown);
window.addEventListener('resize', setPlaceHolderHeights);
function toggleDropDown() {
  if(mediaQuery.matches) {
    let links = document.getElementById('divLinks').childNodes;
    let state = window.getComputedStyle(links[1]).display;
    if(state == 'none') {
      state = 'block';
    }else if(state == 'block') {
      state = 'none';
    }
    for(i = 1; i < links.length; i += 2) {
      links[i].style.display = state;
    }
  }
}
function setPlaceHolderHeights() {
  divTopPH.style.height = (100 * (parseInt(window.getComputedStyle(divTop).height.split('p').shift()) + 20) / window.innerWidth).toString() + 'vw';
}
setPlaceHolderHeights();