/*make div boxes to fit 16x16 exclusively in js */

//set variables
const container = document.querySelector(".container");
const body = document.querySelector("body");
const rows = document.getElementsByClassName("div");
const columns = document.getElementsByClassName("div");
let currClicking = false;
//make box
let defaultSize = true;
function gridDefault() {
     makeRows(16);
     makeColumns(16);
}

function makeRows(rowNum) {
     for (i = 0; i < rowNum; i++) {
          let row = document.createElement("div");
          container.appendChild(row).className = "div";
     }
}

function makeColumns(cellNum) {
     for (i = 0; i < rows.length; i++) {
          for (j = 0; j < cellNum; j++) {
               // Create cell
               let newCell = document.createElement("div");

               // Resize cell
               let containerWidth = container.clientWidth;
               let containerHeight = container.clientHeight;

               let cellWidth = containerWidth / cellNum;
               let cellHeight = containerHeight / rows.length;

               // Use JS to style your cells width and height -
               newCell.style.width = `${cellWidth}px`;
               newCell.style.height = `${cellHeight}px`;
               // Put cell in DOM
               rows[j].appendChild(newCell).className = "cell";
          }
     }
}

gridDefault();

//make hover effect
body.addEventListener("mouseup", (event) => {
     currClicking = false;
});

container.addEventListener("mousedown", (event) => {
     currClicking = true;
});

container.addEventListener("mouseup", (event) => {
     currClicking = false;
});

const boxes = document.querySelectorAll(".cell");
boxes.forEach((box) => {
     box.ondragstart = () => false;
     container.addEventListener("mousemove", (event) => {
          if (currClicking === true) {
               event.target.classList.add("show");
          }
     });
});

//resize grid
const resize = document.querySelector(".resize");
resize.addEventListener("click", (event) => {
     let resizeInputRows = prompt("Rows: (under 100)");
     let resizeInputColumn = prompt("Columns: (under 100)");

     // Get rid of old grid
     container.innerHTML = null;

     makeRows(resizeInputRows);
     makeColumns(resizeInputColumn);

     boxes;
});
