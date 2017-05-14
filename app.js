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
$("#board").on("click", "span", function(evt){
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
    console.log($('scorePoints').text(score));
  });
});

//created target score goals:
  var targetScore = {
    levelOne: 113,
    levelTwo: 154,
    levelThree: 201,
    levelFour: 168,
    levelFive: 179,
    levelSix: 196,
    levelSeven: 208
  };


  function clearAllIntervals(){
    var lastId = setInterval(null, 5000)
    for (var i = 0; i <= lastId; i++){
      clearInterval(i)
    }
  };

  function startTimer(duration, display) {
    clearAllIntervals()
    timer = duration, minutes, seconds;

    var interval = setInterval(function() {
      minutes = parseInt(timer/ 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.text(minutes + ":" + seconds);

      if (score === 113 && level === "one") {
        clearInterval(interval);
        console.log(clearInterval);
        winLevelOne();
      } else if (score > 113 && level === "one") {
        clearInterval(interval);
        console.log(clearInterval);
        youLose();
      }
      if (score === 154 && level === "two") {
        winLevelTwo();
      } else if (score > 154 && level === "two") {
        youLose();
      }
      if (score === 201 && level === "three") {
        winLevelThree();
      } else if (score > 201 && level === "three") {
        youLose();
      }
      if (score === 168 && level === "four") {
        winLevelFour();
      } else if (score > 168 && level === "four") {
        youLose();
      }
      if (score === 179 && level === "five") {
        winLevelFive();
      } else if (score > 179 && level === "five") {
        youLose();
      }
      if (score === 196 && level === "six") {
        winLevelSix();
      } else if (score > 196 && level === "six") {
        youLose();
      }
      if (score === 208 && level === "seven") {
        winLevelSeven();
      } else if (score > 208 && level === "seven") {
        youLose();
      };

      if (--timer <0) {
        timer = 0;
        if (score === targetScore.levelOne && level === "one") {
          winLevelOne();
        } else if (score !== targetScore.levelOne && level === "one") {
          youLose();
        }
        if (score === targetScore.levelTwo && level === "two") {
          winLevelOne();
        } else if (score !== targetScore.levelTwo && level === "two") {
          youLose();
        }
        if (score === targetScore.levelThree && level === "three") {
          winLevelOne();
        } else if (score !== targetScore.levelThree && level === "three") {
          youLose();
        }
        if (score === targetScore.levelFour && level === "four") {
          winLevelOne();
        } else if (score !== targetScore.levelFour && level === "four") {
          youLose();
        }
        if (score === targetScore.levelFive && level === "five") {
          winLevelOne();
        } else if (score !== targetScore.levelFive && level === "five") {
          youLose();
        }
        if (score === targetScore.levelSix && level === "six") {
          winLevelOne();
        } else if (score !== targetScore.levelSix && level === "six") {
          youLose();
        }
        if (score === targetScore.levelSeven && level === "seven") {
          winLevelOne();
        } else if (score !== targetScore.levelSeven && level === "seven") {
          youLose();
        };
      };
  }, 1000);
};

display = $('timer');

// Instruction Window
  $('#zero').click(function() {
    $('instructions').hide();
    levelOne();
  });

  //popup level 1
  function levelOne() {
    $('#popupOne').show();
    $('#first').click(function(){
      $('#popupOne').hide();
      $('#scoreOne').show();
      test = [];
      resetLand();
      level="one";
      score=0;
      Gameboard();
      startTimer(60, display);
    });
  };

  //popup Level 2
  function youLose() {
    $('.restartOne').show();
    $('#restart').click(function() {
      $('#scoreOne').hide();
      $('#scoreTwo').hide();
      $('#scoreThree').hide();
      $('#scoreFour').hide();
      $('#scoreFive').hide();
      $('#scoreSix').hide();
      $('#scoreSeven').hide();
      $('.restartOne').hide();
      score = 0;
      levelOne();
    });
  };

// popup window level 2
  function winLevelOne() {
    timer = 0;
    $('#popupTwo').show();
    $('#second').click(function(){
      $('popupTwo').hide();
      $('#scoreOne').hide();
      $('#scoreTwo').show();
      startTimer(60, display);
      test = [];
      resetLand();
      level= "two";
      score = 0;
      Gameboard();
    });
  };


//popup level 3
  function winLevelTwo() {
    timer = 0;
    $('#popupThree').show();
    $('#third').click(function(){
      $('popupThree').hide();
      $('#scoreTwo').hide();
      $('#scoreThree').show();
      startTimer(50, display);
      test = [];
      resetLand();
      level= "three";
      score = 0;
      Gameboard();
    });
  };

  function winLevelThree() {
    timer = 0;
    $('#popupFour').show();
    $('#fourth').click(function(){
      $('popupFour').hide();
      $('#scoreThree').hide();
      $('#scoreFour').show();
      startTimer(45, display);
      test = [];
      resetLand();
      level= "four";
      score = 0;
      Gameboard();
    });
  };

  function winLevelFour() {
    timer = 0;
    $('#popupFive').show();
    $('#fifth').click(function(){
      $('popupFive').hide();
      $('#scoreFour').hide();
      $('#scoreFive').show();
      startTimer(40, display);
      test = [];
      resetLand();
      level= "five";
      score = 0;
      Gameboard();
    });
  };

  function winLevelFive() {
    timer = 0;
    $('#popupSix').show();
    $('#sixth').click(function(){
      $('popupSix').hide();
      $('#scoreFive').hide();
      $('#scoreSix').show();
      startTimer(30, display);
      test = [];
      resetLand();
      level= "six";
      score = 0;
      Gameboard();
    });
  };

  function winLevelSix() {
    timer = 0;
    $('#popupSeven').show();
    $('#seventh').click(function(){
      $('popupSeven').hide();
      $('#scoreSix').hide();
      $('#scoreSeven').show();
      startTimer(20, display);
      test = [];
      resetLand();
      level= "seven";
      score = 0;
      Gameboard();
    });
  };

  function winLevelSeven() {
    timer = 0;
    $('#popupWin').show();
    $('#win').click(function(){
      $('scoreSeven').hide();
      $('#popupWin').hide();
      levelOne();
      test = [];
      resetLand();
      score = 0;
      Gameboard();
    });
  };
