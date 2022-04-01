const gridContainer = document.querySelector('#grid-container')

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



