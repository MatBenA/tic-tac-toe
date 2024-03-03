const gameBoard = (function () {
    const board = [];

    //creates board
    for (let i = 0; i < 3; i++) {
        board.push([]);
        for (let j = 0; j < 3; j++) {
            board[i].push("X");
        }
    }

    return { board };
})();

//TODO Players object - PlayRound object

console.log(gameBoard.board);
