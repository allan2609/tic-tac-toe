function Gamecontroller(playerOneName = "Player One", playerTwoName = "Player Two") {
  function Gameboard() {
    const size = 3;
    const board = Array(size*size);
    console.log("it runs!!");
    return board;
  }

  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      sign: "X"
    },
    {
      name: playerTwoName,
      sign: "O"
    }
  ];
}
