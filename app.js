console.log("javascript is working")

var level;

// Clock Countdown
var timer;
var minutes;
var seconds;
var interval;

// randomizes stickers on board
var annie = "http://i.imgur.com/44DRP87.png";
var braum = "http://i.imgur.com/bkoQzSh.png";
var jinx = "http://i.imgur.com/J7ybNrV.png";
var vi = "http://i.imgur.com/BgL0ZGD.png";
var zed = "http://i.imgur.com/120qWrR.png";
var objs = [annie, braum, jinx, vi, zed];
var test= [];

// randomizes stickers and places them in an empty array which creates a new land

function Gameboard(){
  for (var i = 0; i <=100; i++){
    test.push(objs[Math.ceil(Math.random()*10) % 5]);
  };
  $('.image').each(function(i){
    $(this).append('<img src=' + test[i] + ' class="piece" />');
  });
};


// empties array to create a new shuffle after every level or if you restart a game
function resetBoard(){
  $('.image').each(function(){
    $(this).text("");
  });
};


//score points assigned to each sticker
var score = 0;
$(.board).on("click", "span", function(evt){
  if (evt.target.src === annie) {
    score = score + 1;
  } else if (evt.target.src === braum) {
    score = score - 3;
  } else if (evt.target.src === jinx) {
    score = score + 4;
  } else if (evt.target.src === vi) {
    score = score + 6;
  } else if (evt.target.src === zed) {
    score = score + 7;
  } else {
    console.log('no match');
  };

  $(evt.target).hide(500, function(){
    $(evt.target).remove();
    console.log(score);
    console.log('scorePoints').text(score));
  });
});
