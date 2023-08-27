function createBoard() {
  const chessBoard = document.getElementById("board");
  const leftLabels = document.getElementById("left-labels");
  const bottomLabels = document.getElementById("bot-labels");

  function createSquares() {
    // Create chess board squares
    for (let x = 8; x > 0; x--) {
      for (let y = 1; y <= 8; y++) {
        const square = document.createElement("div");
        if (x % 2 === 0) {
          if (y % 2 === 0) {
            square.setAttribute("class", "black");
          } else {
            square.setAttribute("class", "white");
          }
        } else if (y % 2 !== 0) {
          square.setAttribute("class", "black");
        } else {
          square.setAttribute("class", "white");
        }

        square.setAttribute("x", x);
        square.setAttribute("y", y);
        chessBoard.appendChild(square);
      }
    }
  }

  function createLabels() {
    // Create labels for board
    const botLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let x = 8; x > 0; x--) {
      // Create left labels
      const leftLabel = document.createElement("p");
      leftLabel.textContent = x;
      leftLabels.appendChild(leftLabel);

      // Create bottom labels
      const botLabel = document.createElement("p");
      botLabel.textContent = botLetters.shift();
      bottomLabels.appendChild(botLabel);
    }
  }

  createSquares();
  createLabels();
}

createBoard();
