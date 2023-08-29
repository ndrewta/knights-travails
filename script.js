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

const move = (x, y) => {
  const possibleMoves = [];

  return { x, y, possibleMoves };
};

const knightMoves = () => {
  // recursive function from start node
  // check each child node from array
  // once it finds the exit node
  // print out everything along the way

  // Initialise all possible moves
  const a1 = move(1, 1);
  const a2 = move(1, 2);
  const a3 = move(1, 3);
  const a4 = move(1, 4);
  const a5 = move(1, 5);
  const a6 = move(1, 6);
  const a7 = move(1, 7);
  const a8 = move(1, 8);
  const b1 = move(2, 1);
  const b2 = move(2, 2);
  const b3 = move(2, 3);
  const b4 = move(2, 4);
  const b5 = move(2, 5);
  const b6 = move(2, 6);
  const b7 = move(2, 7);
  const b8 = move(2, 8);
  const c1 = move(3, 1);
  const c2 = move(3, 2);
  const c3 = move(3, 3);
  const c4 = move(3, 4);
  const c5 = move(3, 5);
  const c6 = move(3, 6);
  const c7 = move(3, 7);
  const c8 = move(3, 8);
  const d1 = move(4, 1);
  const d2 = move(4, 2);
  const d3 = move(4, 3);
  const d4 = move(4, 4);
  const d5 = move(4, 5);
  const d6 = move(4, 6);
  const d7 = move(4, 7);
  const d8 = move(4, 8);
  const e1 = move(5, 1);
  const e2 = move(5, 2);
  const e3 = move(5, 3);
  const e4 = move(5, 4);
  const e5 = move(5, 5);
  const e6 = move(5, 6);
  const e7 = move(5, 7);
  const e8 = move(5, 8);
  const f1 = move(6, 1);
  const f2 = move(6, 2);
  const f3 = move(6, 3);
  const f4 = move(6, 4);
  const f5 = move(6, 5);
  const f6 = move(6, 6);
  const f7 = move(6, 7);
  const f8 = move(6, 8);
  const g1 = move(7, 1);
  const g2 = move(7, 2);
  const g3 = move(7, 3);
  const g4 = move(7, 4);
  const g5 = move(7, 5);
  const g6 = move(7, 6);
  const g7 = move(7, 7);
  const g8 = move(7, 8);
  const h1 = move(8, 1);
  const h2 = move(8, 2);
  const h3 = move(8, 3);
  const h4 = move(8, 4);
  const h5 = move(8, 5);
  const h6 = move(8, 6);
  const h7 = move(8, 7);
  const h8 = move(8, 8);

  // Assign possible moves for each square
  a1.possibleMoves = [b3, c2];
  a2.possibleMoves = [b4, c3, c1];
  a3.possibleMoves = [b5, c4, c2, b1];
  a4.possibleMoves = [b6, c5, c3, b2];
  a5.possibleMoves = [b7, c6, c4, b3];
  a6.possibleMoves = [b8, c7, c5, b4];
  a7.possibleMoves = [c8, c6, b5];
  a8.possibleMoves = [c7, b6];
  b1.possibleMoves = [a3, c3, d2];
  b2.possibleMoves = [a4, c4, d3, d1];
  b3.possibleMoves = [a1, a5, c5, d4, d2, c1];
  b4.possibleMoves = [a2, a6, c6, d5, d3, c2];
  b5.possibleMoves = [a3, a7, c7, d6, d4, c3];
  b6.possibleMoves = [a4, a8, c8, d7, d5, c4];
  b7.possibleMoves = [a5, d8, d6, c5];
  b8.possibleMoves = [a6, d7, c6];
  c1.possibleMoves = [a2, b3, d3, e2];
  c2.possibleMoves = [a1, a3, b4, d4, e3, e1];
  c3.possibleMoves = [b1, a2, a4, b5, d5, e4, e2, d1];
  c4.possibleMoves = [b2, a3, a5, b6, d6, e5, e3, d2];
  c5.possibleMoves = [b3, a4, a6, b7, d7, e6, e4, d3];
  c6.possibleMoves = [b4, a5, a7, b8, d8, e7, e5, d4];
  c7.possibleMoves = [b5, a6, a8, e8, e6, d5];
  c8.possibleMoves = [b6, a7, e7, d6];
  d1.possibleMoves = [b2, c3, e3, f2];
  d2.possibleMoves = [b1, b3, c4, e4, f3, f1];
  d3.possibleMoves = [c1, b2, b4, c5, e5, f4, f2, e1];
  d4.possibleMoves = [c2, b3, b5, c6, e6, f5, f3, e2];
  d5.possibleMoves = [c3, b4, b6, c7, e7, f6, f4, e3];
  d6.possibleMoves = [c4, b5, b7, c8, e8, f7, f5, e4];
  d7.possibleMoves = [c5, b6, b8, f8, f6, e5];
  d8.possibleMoves = [c6, b7, f7, e6];
  e1.possibleMoves = [c2, d3, f3, g2];
  e2.possibleMoves = [c1, c3, d4, f4, g3, g1];
  e3.possibleMoves = [d1, c2, c4, d5, f5, g4, g2, f1];
  e4.possibleMoves = [d2, c3, c5, d6, f6, g5, g3, f2];
  e5.possibleMoves = [d3, c4, c6, d7, f7, g6, g4, f3];
  e6.possibleMoves = [d4, c5, c7, d8, f8, g7, g5, f4];
  e7.possibleMoves = [d5, c6, c8, g8, g6, f5];
  e8.possibleMoves = [d6, c7, g7, f6];
  f1.possibleMoves = [d2, e3, g3, h2];
  f2.possibleMoves = [d1, d3, e4, g4, h3, h1];
  f3.possibleMoves = [e1, d2, d4, e5, g5, h4, h2, g1];
  f4.possibleMoves = [e2, d3, d5, e6, g6, h5, h3, g2];
  f5.possibleMoves = [e3, d4, d6, e7, g7, h6, h4, g3];
  f6.possibleMoves = [e4, d5, d7, e8, g8, h7, h5, g4];
  f7.possibleMoves = [e5, d6, d8, h8, h6, g5];
  f8.possibleMoves = [e6, d7, h7, g6];
  g1.possibleMoves = [e2, f3, h3];
  g2.possibleMoves = [e1, e3, f4, h4];
  g3.possibleMoves = [f1, e2, e4, f5, h5, h1];
  g4.possibleMoves = [f2, e3, e5, f6, h6, h2];
  g5.possibleMoves = [f3, e4, e6, f7, h7, h3];
  g6.possibleMoves = [f4, e5, e7, f8, h8, h4];
  g7.possibleMoves = [f5, e6, e8, h5];
  g8.possibleMoves = [f6, e7, h6];
  h1.possibleMoves = [f2, g3];
  h2.possibleMoves = [f1, f3, g4];
  h3.possibleMoves = [g1, f2, f4, g5];
  h4.possibleMoves = [g2, f3, f5, g6];
  h5.possibleMoves = [g3, f4, f6, g7];
  h6.possibleMoves = [g4, f5, f7, g8];
  h7.possibleMoves = [g5, f6, f8];
  h8.possibleMoves = [g6, f7];

  console.log(a1);
};

createBoard();

console.log(knightMoves());
