//delaring this as a global since it never changes
const gridContainer = document.querySelector('#grid-container')

// initialize page per prompt
createGrid(16);
addButtonListener();

// Made this into a function to auto run on page startup to structure code more clearly.
function addButtonListener() {
  const button = document.querySelector('#btn')
  button.addEventListener('click', () => {
    clearGrid(gridContainer);
    createGrid(userPopUp());
  });
}

// ID the container, create a column, append 16 divs with class .grid and add event listener as created, append to container
function createGrid(size) {
  for (let i = 0; i < size; i++){
  const gridColumn = document.createElement('div');
  gridColumn.classList.add('column');

    for (let i = 0; i < size; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid');
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = `black`;
      });
      gridColumn.appendChild(gridItem);
    } 
        
    gridContainer.appendChild(gridColumn);
  }
}

// clear grid function to remove all children from #grid-container
function clearGrid(parent) {
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
    }
}

// validated popup that only accepts 0 - 100 as inputs
function userPopUp() {
  let input = prompt("Enter # of squares you want for the x & y axis. Limit 100.");
    while (input == null || input < 0 || input > 100 || isNaN(input)) {
      input = prompt("Invalid. Enter # of squares you want for the x & y axis. Limit 100.");
    } return input;
}