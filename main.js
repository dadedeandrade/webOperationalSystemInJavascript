function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
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

function closeHandler(windowId) {
  const currentWindow = document.getElementById(windowId)
  currentWindow.classList.remove('window-opened')
  
}

function maximizeHandler(windowId) {

  let windowElementClassList = document.getElementById(windowId).classList
  let iframe = document.querySelectorAll('.iframe')
  windowElementClassList.contains('maximized') ? windowElementClassList.remove('maximized') : windowElementClassList.add('maximized')
  for(i=0;i<iframe.length;i++){
    iframe[i].classList.toggle('maximized')
  }
}







