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
      } 
    }
  }
  
  let winner;

  function checkWinConditions() {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < conditions.length; i++) {
      const [a, b, c] = conditions[i];
      if (board[a] == currentPlayer.marker && board[b] == currentPlayer.marker && board[c] == currentPlayer.marker) {
        gameStatus.toggleStatus();
        currentPlayer.score++;
        winner = currentPlayer;
        announceWinner();
      } else if (!board.includes(undefined)) {
        gameStatus.toggleStatus();
        announceWinner();
        return;
      }
    }
  }

  function announceWinner() {
    const newButton = document.querySelector(".new");
    const resetButton = document.querySelector(".reset");
    if (winner != undefined) {
      newButton.style.visibility = "visible";
      resetButton.style.visibility = "visible";
      document.querySelector(".player-one").textContent = (players[0].name + "'s score: " + players[0].score);
      document.querySelector(".player-two").textContent = (players[1].name + "'s score: " + players[1].score);
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
    startNewRound();
    players[0].score = 0;
    players[1].score = 0;
    document.querySelector(".player-one").textContent = "";
    document.querySelector(".player-two").textContent = "";
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
