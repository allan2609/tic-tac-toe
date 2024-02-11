const Gamecontroller = (function () {

  function checkWinConditions() {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      console.log("X wins");
    }
  }

  console.log("running...");
  const board = Array(9);
  console.log(board);
  const mark = (index, mark) => {
    if (board[index] == undefined) {
      board.splice(index, 1, mark);
      checkWinConditions();
      console.log(board);
    } else {
    console.log("invalid move");
    }
  }
  return { board, mark };  
})();
