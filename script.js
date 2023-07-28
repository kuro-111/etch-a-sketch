/*make div boxes to fit 16x16 exclusively in js */






//set variables
const container = document.querySelector('.container');
const rows = document.getElementsByClassName('div');
const columns =  document.getElementsByClassName('div');
//make box
function gridDefault() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {

    for (i=0; i<rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "div";
    };
}



function makeColumns(cellNum) {
    for (i=0; i<rows.length; i++) {
        for (j=0; j<cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

gridDefault ();


//make hover effect

const box = document.querySelectorAll('.cell');
box.forEach( box => box.addEventListener('mouseover',(event)=> {
    event.target.classList.add('show');
    

}))






