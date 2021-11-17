const mediaQuery = window.matchMedia('(max-width: 599px)');
const divTopPH = document.getElementById('divTitlePlaceHolder');
const divBottomPH = document.getElementById('divSourcePlaceHolder');
const divTop = document.getElementById('divTop');
const divBottom = document.getElementById('txtSource');
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
    for(i = 1; i < 6; i += 2) {
      links[i].style.display = state;
    }
  }
}
function setPlaceHolderHeights() {
  divTopPH.style.height = (100 * (parseInt(window.getComputedStyle(divTop).height.split('p').shift()) + 20) / window.innerWidth).toString() + 'vw';
  divBottomPH.style.height = (100 * ((parseInt(window.getComputedStyle(divBottom).height.split('p').shift()) + 2 * parseInt(window.getComputedStyle(divBottom).paddingBottom.split('p').shift()))) / window.innerWidth).toString() + 'vw';
}
setPlaceHolderHeights();