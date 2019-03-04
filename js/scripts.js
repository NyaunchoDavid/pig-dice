var player_1 = '';
var player_2 = '';
var p1_score= 0;
var p2_score = 0;
var round = 1;
var maxRound = 6;

var start = document.getElementById('begin');
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');

start.addEventListener('click', function () {
  player_1 = prompt('Player 1 name Please:');
  player_2 = prompt('Player 2 name Please:');
  document.getElementById('player_1').innerHTML = player_1;
  document.getElementById('player_2').innerHTML = player_2;
});

k1.addEventListener('click', function() {
  block = Math.floor(Math.random()*6)+1;
  p1_score += block ;
  refresh(block, false);
  k1.disabled = true;
  k2.disabled = false;
});
k2.addEventListener('click', function() {
  block = Math.floor(Math.random()*6)+1;
  p2_score += block ;
  k2.disabled = true;
  k1.disabled = false;
  refresh(false, block);
  if (round === maxRound) {
    var text = getWinner();
    alert(text);
    endGame();
    return;
  }
  round++;
});

function refresh(k1, k2){
  if (k1 === 0 || k1) {
    document.getElementById('k_p1').innerHTML = k1;
  }
  if (k2 === 0 || k2) {
    document.getElementById('k_p2').innerHTML = k2;
  }
  document.getElementById('score').innerHTML = 'Total Results '+ p1_score +':'+ p2_score;
  document.getElementById('runda').innerHTML = round;

}

function getWinner(){
  if (p1_score > p2_score) {
    return "The winner is " + player_1;
  } else if (p2_score > p1_score) {
     return "The winner is " + player_2;
  }
  return "Thats a Draw";
}

function endGame(){
  round = 1;
  p1_score = 0;
  p2_score = 0;
  refresh(0, 0);
}
