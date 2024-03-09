const Game = (function () {
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

        if(row > 2 || row < 0){
            throw new Error("Out of bounds: row must be an integer number between 0 and 2 inclusive");
        }
        if(col > 2 || col < 0){
            throw new Error("Out of bounds: col must be an integer number between 0 and 2 inclusive");
        }

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

    //TODO should put mark on gameboard and check winning state
    const playTurn = (mark, playerName, row, col) => {
        markCell(mark, row, col);
        return winningState(mark, playerName);
    };

    //checks if given mark has won or the game is in draw state
    const winningState = (mark, playerName) => {
        //this method could be refactored to check for dinamic number of rows and columns
        //win state in rows
        for (let i = 0; i < board.length; i++) {
            if (
                //for future scaling this could be inside
                //of a for loop that increments the columns or rows
                //instead of having to do it manually
                board[i][0] === mark &&
                board[i][1] === mark &&
                board[i][2] === mark
            ) {
                return `${playerName} wins`;
            }
        }

        //Win state in columns
        for (let i = 0; i < board.length; i++) {
            if (
                board[0][i] === mark &&
                board[1][i] === mark &&
                board[2][i] === mark
            ) {
                return `${playerName} wins`;
            }
        }

        //Win state diagonal
        if (
            board[0][0] === mark &&
            board[1][1] === mark &&
            board[2][2] === mark
        ) {
            return `${playerName} wins`;
        }

        //Win state reverse-diagonal
        if (
            board[0][2] === mark &&
            board[1][1] === mark &&
            board[2][0] === mark
        ) {
            return `${playerName} wins`;
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

    return { getBoard, playTurn, reset };
})();


//Create player factory function
function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;
    const play = (row, col) => Game.playTurn(marker, name, row, col);

    return { getName, getMarker, play };
}

//set event listeners for each cell
document
    .querySelectorAll(".cell")
    .forEach((cell) =>
        cell.addEventListener("click", (e) => console.log(cell))
    );

const display = (function () {
    const player1 = Player("", "X");
    const player2 = Player("", "O");

    return {};
})();
