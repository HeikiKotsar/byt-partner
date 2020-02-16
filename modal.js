
// Bronnid
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
  
  // Events
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
  
  // Open
  function openModal() {
    modal.style.display = 'block';
  }
  
  // Close
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Close If Outside Click
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
}

// New
const newBronn = document.querySelector('#new-bronn');
const newBtn = document.querySelector('#new-btn');
const closeBronn = document.querySelector('.close-bronn');

newBtn.addEventListener('click', openNewBronn);
closeBronn.addEventListener('click', closeNewBronn);

// Open
function openNewBronn() {
  newBronn.style.display = 'block';
}

// Close
function closeNewBronn() {
  newBronn.style.display = 'none';
}




