const gridContainer = document.getElementById("grid_container");
const button = document.getElementById("btn");

function randomColor() {
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r}, ${g}, ${b})`
}

function finalGrid() {
    let isClicked = false;
    if (!isClicked) {
        for (let i = 0; i < 256; i++) {
            let div = document.createElement("div");
            div.classList.add("item");
            gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)"
            gridContainer.appendChild(div);
            //CHANGE COLOR
            div.addEventListener("mouseenter", function() {
                div.style.backgroundColor = randomColor();
            })
        }
        isClicked = true;
    }
    button.addEventListener("click", function() {
        gridContainer.innerHTML = "";
        const grid = prompt();
        const totalGrid = grid * grid;
        for (let i = 0; i < totalGrid; i++) {
            let div = document.createElement("div");
            div.classList.add("item");
            gridContainer.style.gridTemplateColumns = `repeat(${grid}, 1fr)`
            gridContainer.appendChild(div);
            //CHANGE COLOR
            div.addEventListener("mouseenter", function() {
                div.style.backgroundColor = randomColor();
            })
        }
    });
}

finalGrid()