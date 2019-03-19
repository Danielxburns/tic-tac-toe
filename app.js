console.log('App loaded!');

var board = document.getElementById("board");

// need to place a piece when a square is clicked
var square = board.addEventListener('click', (e) => {
  var sq = e.target;
  var row = e.target.parentNode;
  console.log(row.className, sq.className);
  piece(row, sq);
});

// Helper Functions
var rowTally = function(moves) {
  return moves.reduce(function(acc, move) {
    if(move[0] in acc) {
      acc[move[0]]++;
    } else {
      acc[move[0]] = 1;
    }
    return acc;
  }, {})
};

var colTally = function(moves) {
  return moves.reduce(function(acc, move) {
    if(move[1] in acc) {
      acc[move[1]]++;
    } else {
      acc[move[1]] = 1;
    }
    return acc;
  }, {})
};

var checker = function(tally) {
  for (key in tally) {
    // console.log('checker tally ' + tally);
    if (tally[key] === 3) {
      return true;
    }
  }
}

var xTurn = true;
var xMoves = [];
var oMoves = [];

// alternate piece after each turn and updates turn field
var piece = function(row,sq) {
  if (!sq.innerHTML) {
    if (xTurn) {
      sq.innerHTML = 'X';
      xMoves.push([row.className, sq.className]);
      // console.log(checker(rowTally(xMoves)));
      //if there are X's in any three rows or any three cols then x is the winner
      if (checker(rowTally(xMoves)) || checker(colTally(xMoves))) {
        document.getElementById('turn').innerHTML=('');
        document.getElementById('turn').innerHTML=('X is the WINNER!')
        return;
      }
      xTurn = !xTurn;
      document.getElementById('turn').innerHTML=('');
      document.getElementById('turn').innerHTML=('O\'s turn')
    } else {
      sq.innerHTML = 'O';
      oMoves.push([row.className, sq.className]);
      //if there are O's in any three rows or any three cols then O is the winner
      if (checker(rowTally(xMoves) )|| checker(colTally(xMoves))) {
        document.getElementById('turn').innerHTML=('');
        document.getElementById('turn').innerHTML=('O is the WINNER!')
        console.log('X wins!');
        return;
      }
      xTurn = !xTurn;
      document.getElementById('turn').innerHTML=('');
      document.getElementById('turn').innerHTML=('X\'s turn')
    }
  }
};


// reset game when play again button is clicked
var reset = document.querySelector('button');
button.addEventListener('click', () => {
  var gameSquares = Array.from(document.getElementsByTagName('td'));
  gameSquares.forEach((item) => item.innerHTML = '')
});
// keep track of game play and implement rules

