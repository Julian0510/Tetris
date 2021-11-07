const canvas = document.getElementById("tetrisCanvas");
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 800;

let board = fillBoard([20, 10]);

const cWidth = canvas.width/board.length*2;

let x = 0;
let y = 0;

var looper = setInterval(mainLoop,500);


function mainLoop(){
    clearBoard();
    
    merge(board, piece);
    display(board);
    
    console.log(board);
}
function display(board){
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!=0){
                switch(value){
                    case 1:
                        ctx.fillStyle = 'blue';
                        break;
                    case 2:
                        ctx.fillStyle = 'green';
                        break;
                    case 3:
                        ctx.fillStyle = 'yellow';
                        break;
                    case 4:
                        ctx.fillStyle = 'orange';
                        break;
                    case 5:
                        ctx.fillStyle = 'purple';
                        break;
                    case 6:
                        ctx.fillStyle = 'pink';
                        break;
                    case 7:
                        ctx.fillStyle = 'red';
                        break;
                }
                ctx.fillRect(x*cWidth, y*cWidth, cWidth, cWidth);
                ctx.fillStyle = 'black';
                ctx.strokeRect(x*cWidth, y*cWidth, cWidth, cWidth);
            }
        });
    });

}
function merge(board, piece){
    piece.currentShape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!=0){
                if(board[y + piece.y]){
                    board[y + piece.y][x + piece.x] = value;
                }
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
