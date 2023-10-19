const gridContainer = document.querySelector(".grid-container")

for(let i = 0; i < 256;i++){
    const gridDiv = document.createElement("div")
    gridDiv.className = "grid-div"
    gridDiv.textContent = "a"
    gridContainer.appendChild(gridDiv)
}
