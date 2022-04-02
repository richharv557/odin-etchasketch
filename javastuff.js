const gridContainer = document.querySelector('#grid-container')

createGrid(16);


function createGrid(size) {
// ID the container, create a column, append 16 divs, append to container
    for (let i = 0; i < size; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
        for (let i = 0; i < size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid');
            gridColumn.appendChild(gridItem);
        } gridContainer.appendChild(gridColumn);
    }
}

function clearGrid(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function userPopUp() {
    let input = prompt("Enter # of squares you want for the x & y axis. Limit 100.");
        while (input == null || input < 0 || input > 100 || isNaN(input)) {
            input = prompt("Invalid. Enter # of squares you want for the x & y axis. Limit 100.");
        } return input;
}