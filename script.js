function createBoard() {
  const chessBoard = document.getElementById("board");
  const leftLabels = document.getElementById("left-labels");
  const bottomLabels = document.getElementById("bot-labels");

  function createSquares() {
    // Create chess board squares
    for (let x = 7; x >= 0; x--) {
      for (let y = 0; y < 8; y++) {
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

        square.setAttribute("data-x", x);
        square.setAttribute("data-y", y);
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

const plotMoves = (moves) => {
  const chessBoard = document.getElementById("board");

  for (let i = 0; i < moves.length; i++) {
    const p = document.createElement("p");
    p.textContent = i;
    if (i === 0) {
      p.textContent = "Start";
    } else if (i === moves.length - 1) {
      p.textContent = "End";
    }

    for (let j = 0; j < chessBoard.childNodes.length; j++) {
      if (
        chessBoard.childNodes[j].dataset.x == moves[i].x &&
        chessBoard.childNodes[j].dataset.y == moves[i].y
      ) {
        chessBoard.childNodes[j].appendChild(p);
      }
    }
  }
};

const knightFactory = () => {
  function run(a, b) {
    const start = {};
    const end = {};
    [start.x, start.y] = a;
    [end.x, end.y] = b;

    const moves = knightMove(start, end);
    plotMoves(moves);
  }

  function knightMove(start, end) {
    // Board size 8x8
    const boardSize = 8;

    const possibleMoves = [
      // 8 possible moves
      { x: -1, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: -2, y: -1 },
      { x: -1, y: -2 },
      { x: 1, y: -2 },
    ];

    // Traverse tree with BFS algorithm
    const queue = [];
    const visited = new Set();
    const previous = {};
    const shortestPath = [];
    let found = false;
    queue.push(start);
    visited.add(JSON.stringify(start));

    while (queue.length > 0 && !found) {
      const current = queue.shift();

      // Check if current move == end then exit
      if (current.x == end.x && current.y == end.y) {
        found = true;
      }

      for (let i = 0; i < possibleMoves.length; i++) {
        // Add possible moves to current
        const nextX = current.x + possibleMoves[i].x;
        const nextY = current.y + possibleMoves[i].y;
        const next = { x: nextX, y: nextY };

        if (
          nextX >= 0 &&
          nextX < boardSize &&
          nextY >= 0 &&
          nextY < boardSize &&
          !visited.has(JSON.stringify(next))
        ) {
          // Check if moves go off board
          queue.push(next);
          visited.add(JSON.stringify(next));

          // Store previous square
          previous[JSON.stringify(next)] = current;
        }
      }
    }

    if (found) {
      let current = end;

      while (current.x !== start.x || current.y !== start.y) {
        shortestPath.unshift(current);

        current = previous[JSON.stringify(current)];
      }
      shortestPath.unshift(start);
    }
    return shortestPath;
  }
  return { run };
};

createBoard();

const knight = knightFactory();
knight.run([4, 4], [1, 4]);
