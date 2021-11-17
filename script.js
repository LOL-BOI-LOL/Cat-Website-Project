const mediaQuery = window.matchMedia('(max-width: 599px)');
const divTopPH = document.getElementById('divTitlePlaceHolder');
const divTop = document.getElementById('divTop');
const audio = document.getElementById('Audio');
const divPopUp = document.getElementById('divPopUp');
const divBlur = document.getElementById('divBlur');
document.getElementById('txtDropDown').addEventListener("click", toggleDropDown);
window.addEventListener('resize', setPlaceHolderHeights);
divPopUp.addEventListener('click', scrnUnblur);
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
function scrnUnblur() {
  divPopUp.style.display = 'none';
  divBlur.style.display = 'none';
  audio.play();
}
function audioCheck() {
  if(audio.paused) {
    divPopUp.style.display = 'block';
    divBlur.style.display = 'block';
  }
}
setPlaceHolderHeights();
setTimeout(audioCheck, 50);