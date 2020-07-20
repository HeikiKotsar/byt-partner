


function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.active');
  
  // deactivate existing active tab and panel
  // for( let i = 0; i < activeTabs.length; i++) {
  //   activeTabs[i].className = activeTabs[i].className.replace('active', '');
  // }
  
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });
  
  // activate new tab and panel
  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);


const checkList = document.getElementById('list1');
const items = document.getElementById('items');
// checkList.getElementsByClassName('anchor')[0].onclick = function() {
  if (items.classList.contains('visible')) {
    items.classList.remove('visible');
    items.style.display = "none";
  } else {
    items.classList.add('visible');
    items.style.display = "block";
  }

// }

items.onblur = function(evt) {
  items.classList.remove('visible');
}





// Responsive navbar
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
}


// Tabs





 


  
  
  
  





  
  
  