const Gamecontroller = (function () {
  const board = Array(9);

  const gameStatus = {
    active: true,
    toggleStatus: () => {
      gameStatus.active = !gameStatus.active;
    }
  };

  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.score = 0;
  }

  const players = [
    new Player("Player X", "X"),
    new Player("Player O", "O"),
  ];

  let currentPlayer;

  function getCurrentPlayer() {
    currentPlayer != players[0] ? currentPlayer = players[0] : currentPlayer = players[1];
    return currentPlayer;
  }

  function render() {
    const container = document.querySelector(".container");

    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < board.length; i++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
      cell.className = "cell";
      cell.textContent = board[i];
      cell.setAttribute("data-id", i);
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.addEventListener("click", mark));
  }

  function mark(e) {
    if (gameStatus.active) {
      let index = e.currentTarget.dataset.id;
      if (board[index] == undefined) {
        board.splice(index, 1, getCurrentPlayer().marker);
        render();
        checkWinConditions();
      } else {
        console.log("invalid move");
      }
    }
    if (!gameStatus.active) {
      console.log("clicked after end of game");
    }
  }

  function checkWinConditions() {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++; 
      announceWinner();
    }
  }

  function announceWinner() {
    alert("Game over. " + currentPlayer.name + " has won. Their score is " + currentPlayer.score);
  }

  render();
})();
