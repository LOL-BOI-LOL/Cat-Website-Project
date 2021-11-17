const divTopPH = document.getElementById('divTitlePlaceHolder');
const divTop = document.getElementById('divTop');
const audio = document.getElementById('Audio');
const imgEnlarged = document.getElementById('imgEnlarged');
const divPopUp = document.getElementById('divPopUp');
const divBlur = document.getElementById('divBlur');
const musicToggle = document.getElementById('divMusic').childNodes[1];
const imgs = document.getElementsByTagName('IMG');
musicToggle.addEventListener('click', toggleMusic);
document.getElementById('txtDropDown').addEventListener("click", toggleDropDown);
window.addEventListener('resize', setPlaceHolderHeights);
window.addEventListener('orientationchange', setPlaceHolderHeights);
divBlur.addEventListener('click', scrnUnblur);
for(i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', enlargeImg);
}
function toggleDropDown() {
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
function setPlaceHolderHeights() {
  divTopPH.style.height = (100 * (parseInt(window.getComputedStyle(divTop).height.split('p').shift()) + 20) / window.innerWidth).toString() + 'vw';
}
function scrnUnblur() {
  divPopUp.style.display = 'none';
  divBlur.style.display = 'none';
  imgEnlarged.src = '';
  imgEnlarged.margin = '';
}
function toggleMusic() {
  if(musicToggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
}
function enlargeImg() {
  imgEnlarged.src = this.src;
  divPopUp.style.display = 'block';  
  divBlur.style.display = 'block';
  imgEnlarged.style.margin = (((window.innerHeight - parseInt(window.getComputedStyle(imgEnlarged).height.split('p').shift()))/2)-1).toString() + 'px ' + ((((window.innerWidth - parseInt(window.getComputedStyle(imgEnlarged).width.split('p').shift()))/2)-1).toString() + 'px');
}
setPlaceHolderHeights();
setTimeout(toggleMusic, 1000);