/*make div boxes to fit 16x16 exclusively in js */

//set variables
const container = document.querySelector(".container");
const body = document.querySelector("body");
const rows = document.getElementsByClassName("div");
const columns = document.getElementsByClassName("div");
let currClicking = false;
//make box
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
               let newCell = document.createElement("div");
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

const resize = document.querySelector(".resize");
resize.addEventListener("click", (event) => {
     let resizeInputRows = prompt("Rows: (under 200)");
     let resizeInputColumn = prompt("Columns: (under 200)");

     // Get rid of old grid

     makeRows(resizeInputRows);
     makeColumns(resizeInputColumn);
});
