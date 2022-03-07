function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


const chromeIcon = document.getElementById('chromeIcon')

chromeIcon.addEventListener('click',()=>{
  windowHandler('windowBrowser')
})
const leagueIcon = document.getElementById('leagueIcon')

leagueIcon.addEventListener('click',()=>{
  windowHandler('windowLeague')
})



function windowHandler(windowId) {
  const currentWindow = document.getElementById(windowId)
  currentWindow.classList.add('window-opened')
  
  
  
  
  dragElement(currentWindow);
}

const btnClose = document.querySelectorAll(".close")

btnClose[0].addEventListener('click',()=>{
  currentWindow.classList.remove('window-opened')
})
btnClose[1].addEventListener('click',()=>{
  currentWindow.classList.remove('window-opened')
})

function maximizeHandler(windowId) {

  let windowElementClassList = document.getElementById(windowId).classList
  let iframe = document.querySelectorAll('.iframe')
  windowElementClassList.contains('maximized') ? windowElementClassList.remove('maximized') : windowElementClassList.add('maximized')
  for(i=0;i<iframe.length;i++){
    iframe[i].classList.toggle('maximized')
  }
}







