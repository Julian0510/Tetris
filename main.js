const canvas = document.getElementById("tetrisCanvas");
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 700;

let board = fillBoard([20, 10]);
let x = 10;
let y = 10;

var looper = setInterval(mainLoop,500);

function mainLoop(){
    clearBoard();

    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,10,10);
    y+=10;
}

function clearBoard(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function fillBoard(dimensions){
    let board = new Array(dimensions[0]);
    for (let i = 0; i < board.length; ++i) {
        board[i] = new Array(dimensions[1]).fill(0);
    }
    return board;
}
