const Gameboard = (function () {
    const board = [];
    //creates board
    for (let i = 0; i < 3; i++) {
        board.push([]);
        for (let j = 0; j < 3; j++) {
            board[i].push("");
        }
    }

    //Shows gameboard
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
    /*  TODO recognize not only Xs but Os too */
    const winningState = (mark) => {
        //win state in rows
        for (let i = 0; i < board.length; i++) {
            if (
                board[i][0] === mark &&
                board[i][1] === mark &&
                board[i][2] === mark
            ) {
                return `${mark} wins`;
            }
        }

        //Win state in columns
        for (let i = 0; i < board.length; i++) {
            if (
                board[0][i] === mark &&
                board[1][i] === mark &&
                board[2][i] === mark
            ) {
                return `${mark} wins`;
            }
        }

        //Win state diagonal
        if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) {
            return `${mark} wins`;
        }

        //Win state reverse-diagonal
        if (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) {
            return `${mark} wins`;
        }

        //Draw state
        let isFull = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === "") {
                    isFull = false;
                }
            }
        }
        return isFull && "draw";
    };
    return { winningState };
})(Gameboard.getBoard());

//Create player factory function
function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}
