const canvas = document.getElementById("tetrisCanvas");
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 700;

let board = fillBoard([20, 10]);
let x = 0;
let y = 0;

var looper = setInterval(mainLoop,500);


function mainLoop(){
    clearBoard();
    
    merge(board, piece);
    

    console.log(board);
}
function merge(board, piece){
    piece.currentShape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!=0){
                board[y + piece.y][x + piece.x] = value;
            }
        });
    });
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
