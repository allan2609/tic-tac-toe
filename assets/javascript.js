const Gamecontroller = (function () {
 
  function checkWinConditions() {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      console.log("Game over. X wins.");
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      console.log("Game over. X wins.");
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      console.log("Game over. X wins.");
    } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
      console.log("Game over. X wins.");
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      console.log("Game over. X wins.");
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      console.log("Game over. X wins.");
    } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
      console.log("Game over. X wins.");
    } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
      console.log("Game over. X wins.");
    } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
      console.log("Game over. O wins.");
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
      console.log("Game over. O wins.");
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
      console.log("Game over. O wins.");
    } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
      console.log("Game over. O wins.");
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
      console.log("Game over. O wins.");
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
      console.log("Game over. O wins.");
    } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
      console.log("Game over. O wins.");
    } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
      console.log("Game over. O wins.");
    }
  }
 
  let marker;
 
  function getMarker() {  
    if (marker == undefined || marker == "O") {
      marker = "X";
    } else if (marker == "X") {
      marker = "O";
    }
    return marker;
  } 
 
  const board = Array(9);
  console.log(board);
 
  const mark = (index) => {
    if (board[index] == undefined) {
      board.splice(index, 1, getMarker());
      checkWinConditions();
      console.log(board);
    } else {
    console.log("invalid move");
    }
  }

  function render() {
    const container = document.querySelector(".container");

    while (container.hasChildNodes()) {
      container.removeChild(document.firstChild);
    }
 
    for (let i = 0; i < board.length; i++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
      cell.className = "cell";
    }
  }

  return { mark }; 

})();
