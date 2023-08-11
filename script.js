//set variables
let boxes = null;
const container = document.querySelector(".container");
const body = document.querySelector("body");
const rows = document.getElementsByClassName("div");
const columns = document.getElementsByClassName("div");
let currClicking = false;
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");
const colorPicker = document.getElementById("color-picker");
const rainB = document.querySelector(".rainB");
const owo = document.querySelector(".special");

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

function draw(box, color) {
     box.ondragstart = () => false;
     container.addEventListener("mousemove", (event) => {
          if (currClicking === true) {
               event.target.style.backgroundColor = color;
          }
     });
}

function resizeGrid(event) {
     let resizeInputRows = prompt("Rows: (under 100)");
     let resizeInputColumn = prompt("Columns: (under 100)");

     if (resizeInputRows > 100 || resizeInputColumn > 100) {
          alert("Invalid input");
          return;
     } else if (resizeInputColumn <= 0 || resizeInputRows <= 0) {
          alert("Invalid");
          return;
     }

     // Get rid of old grid
     container.innerHTML = null;

     makeRows(resizeInputRows);
     makeColumns(resizeInputColumn);

     boxes = document.querySelectorAll(".cell");
}

function rainbowDraw(box) {
     box.ondragstart = () => false;
     container.addEventListener("mousemove", (event) => {
          if (currClicking === true) {
               let rgb = "#" + Math.random().toString(16).substr(-6);
               event.target.style.backgroundColor = rgb;
          }
     });
}

function init() {
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

     boxes = document.querySelectorAll(".cell");
     boxes.forEach((box) => {
          draw(box, "black");
     });

     //resize grid
     resize.addEventListener("click", (event) => {
          resizeGrid(event);
     });

     //reset grid
     reset.addEventListener("click", (event) => {
          boxes.forEach((boxR) => {
               boxR.style.backgroundColor = "transparent";
          });
     });

     //Change color
     colorPicker.addEventListener("input", (eventColor) => {
          boxes.forEach((box) => {
               draw(box, eventColor.target.value);
          });
     });

     //rainbow mode
     rainB.addEventListener("click", (event) => {
          boxes.forEach((box) => {
               rainbowDraw(box);
          });
     });
}

init();
