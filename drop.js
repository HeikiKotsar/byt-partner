// Dropdown menu
const dropdown = document.querySelector('.dropdownBtn');
const dropdownMenu = document.querySelector('.dropdown-projects');

function toggleProjects(){
  dropdownMenu.classList.toggle('active1');
}

dropdown.addEventListener('click', toggleProjects);