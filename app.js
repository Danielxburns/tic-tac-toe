console.log('App loaded!');

var board = document.getElementById("board");

var placed = board.addEventListener('click', (e) => {
  console.log(e.target.parentNode.className, e.target.className);
  e.target.innerHTML = 'X';

});

// need to place a piece when a square is clicked
// alternate piece after each turn
// make that piece unclickable
// update turn field
