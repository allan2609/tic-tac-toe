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
    const gameField = document.querySelector(".gamefield");

    while(gameField.hasChildNodes()) {
      gameField.removeChild(gameField.firstChild);
    }

    for (let i = 0; i < board.length; i++) {
      const cell = document.createElement("div");
      gameField.appendChild(cell);
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
        return;
      } else {
        console.log("invalid move");
      }
    }
    if (!gameStatus.active) {
      console.log("clicked after end of game");
    }
  }
  
  let winner;

  function checkWinConditions() {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
      gameStatus.toggleStatus();
      currentPlayer.score++;
      winner = currentPlayer;
      announceWinner();
    } else if (!board.includes(undefined)) {
      gameStatus.toggleStatus();
      announceWinner();
    }
  }

  function announceWinner() {
    const playerOneInfo = document.querySelector(".player-one");
    const playerTwoInfo = document.querySelector(".player-two");
    const newButton = document.querySelector(".new");
    const resetButton = document.querySelector(".reset");
    if (winner != undefined) {
      newButton.style.visibility = "visible";
      resetButton.style.visibility = "visible";
      playerOneInfo.textContent = (players[0].name + "'s score: " + players[0].score);
      playerTwoInfo.textContent = (players[1].name + "'s score: " + players[1].score);
    } else if (winner == undefined) {
      newButton.style.visibility = "visible";
      resetButton.style.visibility = "visible";
    }
    winner = undefined;
  }
  
  document.querySelector(".new").addEventListener("click", startNewRound);
  
  function startNewRound() {
    gameStatus.toggleStatus();
    for (let i = 0; i < board.length; i++) {
      board[i] = undefined;
    }
    currentPlayer = undefined;
    render();
    document.querySelector(".new").style.visibility = "hidden";
    document.querySelector(".reset").style.visibility = "hidden";
  }
  
  document.querySelector(".reset").addEventListener("click", resetGame);
  
  function resetGame() {
    const playerOneInfo = document.querySelector(".player-one");
    const playerTwoInfo = document.querySelector(".player-two");
    startNewRound();
    players[0].score = 0;
    players[1].score = 0;
    playerOneInfo.textContent = "";
    playerTwoInfo.textContent = "";
  }
  
  const playerOneNameInput = document.querySelector("#player-one-name");
  const playerTwoNameInput = document.querySelector("#player-two-name");

  playerOneNameInput.value = "Player X";
  playerTwoNameInput.value = "Player O";

  document.querySelector(".begin").addEventListener("click", getNames);
  
  function getNames() {
    players[0].name = playerOneNameInput.value;
    players[1].name = playerTwoNameInput.value;
    dialog.close();
  };

  render();
  dialog.showModal();

})();
