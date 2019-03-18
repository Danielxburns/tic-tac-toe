console.log('App loaded!');

var board = document.getElementById("board");

// need to place a piece when a square is clicked
var square = board.addEventListener('click', (e) => {
  var sq = e.target;
  var row = e.target.parentNode;
  console.log(row.className, sq.className);
  piece(sq);
  // return (sq);
  // e.target.innerHTML = 'X';
});

// alternate piece after each turn
// update turn field
var xTurn = true;
var piece = function(sq) {
  if (!sq.innerHTML) {
    if (xTurn) {
      sq.innerHTML = 'X';
      xTurn = !xTurn;
      document.getElementById('turn').innerHTML=('');
      document.getElementById('turn').innerHTML=('O\'s turn')
    } else {
      sq.innerHTML = 'O';
      xTurn = !xTurn;
      document.getElementById('turn').innerHTML=('');
      document.getElementById('turn').innerHTML=('X\'s turn')
    }
  }
};

// reset game when play again button is clicked
// keep track of game play and implement rules