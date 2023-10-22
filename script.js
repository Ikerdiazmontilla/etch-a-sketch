const gridContainer = document.querySelector(".grid-container")

function changeGrid(nSquares = 16){
    gridContainer.innerHTML = null
for(let i = 0; i < nSquares**2;i++){
    const div = document.createElement("div")
    div.className = "grid-div"
    flexBasis = (100/nSquares)
    div.style.flexBasis = `${flexBasis}%`
    gridContainer.appendChild(div)
}
}
changeGrid()


const gridPrompt = document.querySelector(".grid-prompt")





function paintBlack(){
    const divGrid = document.querySelectorAll(".grid-div")
    divGrid.forEach((div) => {
        div.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "black"
            }
        )
    }
    )
}
paintBlack()


gridPrompt.addEventListener("click", () => {
    while (true){
        nSquares = parseInt(prompt("How many squares wide do you want your grid to be?(max = 100): "))
        if (nSquares <= 100){
            changeGrid(nSquares)
            paintBlack()
            break;
        }
        else{
            continue;
        }
    }
    
} )