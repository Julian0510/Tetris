const canvas = document.getElementById("tetrisCanvas");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10,10,10,10);

let x = 10;
let y = 10;

var looper = setInterval(mainLoop,500);
function mainLoop(){
    clearBoard();

    ctx.fillStyle = 'blue';
    ctx.fillRect(x,10,10,10);
    y+=10;
}

function clearBoard(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,500,500);

}