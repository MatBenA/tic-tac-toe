const Gameboard = (function () {
    const board = [];
    //creates board
    for (let i = 0; i < 3; i++) {
        board.push([]);
        for (let j = 0; j < 3; j++) {
            board[i].push("");
        }
    }

    const getBoard = () => board;

    //Marks a cell in a specified position
    const markCell = (mark, col, row) => {
        if (board[row][col]) {
            throw new Error("Position already occupied");
        }
        board[row][col] = mark;
    };

    //Cleans the gameboard
    const reset = () => {
        board.forEach((row, i) => {
            row.forEach((col, j) => (board[i][j] = ""));
        });
    };

    return { getBoard, markCell, reset };
})();




//Create player factory function
function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}
