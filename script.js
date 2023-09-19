// Initialise variables
let startPos = {};
let endPos = {};
let searched = false;

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

function plotMoves(moves) {
  // Plot moves on board
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
}

function resetBoard(board) {
  // Remove all child nodes and create new squares
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
  createSquares();
}

function createBoard() {
  createSquares();
  createLabels();
}

const knightFactory = () => {
  function run(start, end) {
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
          nextX > 0 &&
          nextX <= boardSize &&
          nextY > 0 &&
          nextY <= boardSize &&
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

function getSquares(e) {
  const square = e.target.closest("div").dataset;

  if (!searched) {
    if (Object.keys(startPos).length === 0) {
      // Store start square
      startPos.x = Number(square.x);
      startPos.y = Number(square.y);
    } else if (startPos.x == square.x && startPos.y == square.y) {
      // Return if square already selected
      console.log("Can't be same as start square");
    } else {
      // Store end square
      endPos.x = Number(square.x);
      endPos.y = Number(square.y);
    }

    if (Object.keys(startPos).length > 0 && Object.keys(endPos).length > 0) {
      knight.run(startPos, endPos);
      startPos = {};
      endPos = {};
      searched = true;
    }
  } else {
    // Reset board and flag
    resetBoard(chessBoard);
    searched = false;

    // Store start square
    startPos.x = Number(square.x);
    startPos.y = Number(square.y);
  }
}

createBoard();
chessBoard.addEventListener("click", (e) => getSquares(e));
const knight = knightFactory();
