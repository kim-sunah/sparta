function start(choice){
  document.getElementById("choiceform").style.visibility ='hidden';
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint;          // Word getHint
  var word;              // Selected word
  var guess;             // Geuss
  var geusses = [];      // Stored geusses
  var lives;             // Lives
  var counter;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "주제 : 과일";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "주제 : 개발";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "주제 : 동물";
    }
  }

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives;
    console.log(drawMe)
    $img = document.querySelector(".wrapper > img");
    console.log(drawArray[drawMe]);
    console.log($img)
    $img.src = drawArray[drawMe];

  }

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  drawArray = ["image/8.png", "image/7.png", "image/6.png", "image/5.png", "image/4.png", "image/3.png", "image/2.png", "image/1.png"];


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (lives !=  0) {
        if (j === -1) {
          this.setAttribute("style", "color : red;")
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
  }


  // Play
  play = function () {
    categories = [
      ["apple", "banana", "orange", "watermelon", "mango", "peach", "durian"],
      ["java", "unity", "flutter", "javascript", "react", "python", "dart"],
      ["bear", "monkey", "mouse", "elephant", "rabbit", "dolphin", "squirrel"]
    ];

    chosenCategory = categories[choice];
    console.log(chosenCategory);
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [];
    lives = 7;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    // canvas();
  }

  play();

  // Reset

  document.getElementById('reset').onclick = function () {
    location.reload();
  }
}

