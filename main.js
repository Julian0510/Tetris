const canvas = document.getElementById("tetrisCanvas");
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 800;
var piece = {
    currentShape: Shape.randShape(),
    nextShape: null,
    x: 4,
    y: -3
}
let board = fillBoard([20, 10]);



const cWidth = canvas.width/board.length*2;

let x = 0;
let y = 0;

var looper = setInterval(mainLoop,500);
// clearBoard();
// board[board.length-1].fill(1);
// fall(board, piece);
// display(board);

function mainLoop(){
    clearBoard();

    fall(board, piece);

    display(board);
    // console.log(board);'
    // console.log(piece.y);
}

function fall(board, piece){
    unMerge(board, piece);
    piece.y++;
    if(itsClear(board, piece)){
        merge(board, piece);
    }else{
        merge(board, piece);
        piece.currentShape = Shape.randShape();
        piece.y = -3;
    }
}
function itsClear(board, piece){
    let ret = 0;
    piece.currentShape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!=0){
                if(board[y + piece.y + 1]){
                    ret += board[y + piece.y + 1][x + piece.x];
                }
            }
        });
    });
    if(ret !== 0){return false}
    return (piece.y < board.length - 3);
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
                ctx.lineJoin = 'bevel';
                ctx.fillRect(x*cWidth, y*cWidth, cWidth, cWidth);
                ctx.strokeStyle = 'black';
                ctx.strokeRect(x*cWidth, y*cWidth, cWidth, cWidth);
            }else{
                ctx.shadowColor = 'red'
                ctx.shadowBlue = 20;
                ctx.lineJoin = 'bevel';
                ctx.strokeStyle = 'rgb(240, 240, 240)'
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
function unMerge(board, piece){
    piece.currentShape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!=0){
                if(board[y + piece.y]){
                    board[y + piece.y][x + piece.x] = 0;
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
            //w   a   s   d   up  lf  ri   do
const keys = ['w', 'a', 'd', 's',  'ArrowUp', 'ArrowLeft', 'ArrowRight',  'ArrowDown'];
window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case keys[0]||keys[0+4]:

            break;
        case keys[1]||keys[1+4]:
            unMerge(board, piece);
            piece.x--;
            if(itsClear(board, piece)){
                merge(board, piece);
            }else{
                merge(board, piece);
                piece.currentShape = Shape.randShape();
                piece.y = -3;
            }
            
            break;
        case keys[2]||keys[2+4]:
            unMerge(board, piece);
            piece.x++;
            if(itsClear(board, piece)){
                merge(board, piece);
            }else{
                merge(board, piece);
                piece.currentShape = Shape.randShape();
                piece.y = -3;
            }
            break;
        case keys[3]||keys[3+4]:

            break;

    }
});

