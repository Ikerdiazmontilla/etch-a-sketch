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

const rainbow = document.querySelector(".rainbow")
const black = document.querySelector(".black")
const eraser = document.querySelector(".eraser")
const clear = document.querySelector(".clear")
const colorPicker = document.querySelector("#color-picker")

function paintRainbow(){
    const divGrid = document.querySelectorAll(".grid-div")
    divGrid.forEach((div) => {
        div.addEventListener("mouseover", function(event){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = "#" + randomColor;
            }
        )
    }
    )
}


function paintWhite(){
    const divGrid = document.querySelectorAll(".grid-div")
    divGrid.forEach((div) => {
        div.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "white"
            }
        )
    }
    )
}


function paintSelectedColor(event){
    const divGrid = document.querySelectorAll(".grid-div");
    const color = event.target.value;
    divGrid.forEach((div) => {
        div.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = color;
            }
        )
    }
    )
}



function clearGrid(){
    const nElements = gridContainer.childElementCount
    const elementsInRow = Math.sqrt(nElements)
    changeGrid(elementsInRow)
    paintBlack()
}



rainbow.addEventListener("click", paintRainbow)
black.addEventListener("click", paintBlack)
eraser.addEventListener("click", paintWhite)
clear.addEventListener("click", clearGrid)
colorPicker.addEventListener("input", paintSelectedColor)




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