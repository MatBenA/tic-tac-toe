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
    const markCell = (mark, row, col) => {
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

const Game = (function (board) {
    /*  TODO
        Winning Stat:
            -In line -In Column -At diagonal
            draw
            keep playing

            return winner
    */
    const winningState = () => {
        //win state in rows
        let winner;
        board.forEach((row) => {
            if (row[0] === "X" && row[1] === "X" && row[2] === "X") {
                winner = "X wins";
            }
        });
        
        //Win state in columns
        
        return winner;
    };
    return { winningState };
})(Gameboard.getBoard());

//Create player factory function
function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}
