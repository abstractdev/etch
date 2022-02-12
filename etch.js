//Global Variables
const main = document.querySelector("#main");
const startButton = document.querySelector('#startButton');
const gridDefault = document.querySelector('#gridDefault');
const gridRandom = document.querySelector('#gridRandom');
const markerDefault = document.querySelector('#markerDefault');
const markerRandom = document.querySelector('#markerRandom');
const sqAll = document.querySelectorAll('.sq');
const clear = document.querySelector('#clear');
let userInput;



//Event Listeners
startButton.addEventListener('click', function() {
  removeSquares();
  removeRows();
  makeGrid();
  hoverMouse();
});

gridDefault.addEventListener('click', function() {
  stayDefault();
});

gridRandom.addEventListener('click', function () {
  changeColors();
});

markerDefault.addEventListener('click', function() {
  hoverMouse();
});

markerRandom.addEventListener('click', function() {
  hoverMouseRandom();
});



//Functions
function removeRows() {
  let temp = document.querySelectorAll('.row');

  for (let i = 0; i < temp.length; i++) {
    const elem = temp[i];
    elem.parentNode.removeChild(elem);
  }
}


function removeSquares() {
  let temp = document.querySelectorAll('.sq');

  for (let i = 0; i < temp.length; i++) {
    const elem = temp[i];
    elem.parentNode.removeChild(elem);
  }
}


function makeGrid() {
  userInput = parseInt(prompt("How many squares per side?"));

  if (userInput <= 100) {
    createRows();
    createSquares();
  }
  else {
    alert('Please pick a number between 1 and 100');
  }
}


function createRows(){
  let row = [];
  for (i = 0; i < userInput; i++) {
    row[i] = document.createElement('div');
    row[i].className = "row";
    main.appendChild(row[i]);
    let iString = i.toString();
    row[i].id = "row" + iString;
  };
}


function createSquares() {
  let sq = [];
  for (i = 0; i < userInput; i++)
  (main.childNodes).forEach(function() {
      sq[i] = document.createElement('div')
      sq[i].className = "sq";
      (main.childNodes)[i].appendChild(sq[i]);
  });
}


function hoverMouse() {
  let sqAll = document.querySelectorAll('.sq');
  sqAll.forEach(function (i) {
    i.addEventListener("mouseover", function() {
      this.style.backgroundColor = "black";
    });
  });
}


function hoverMouseRandom() {
  let sqAll = document.querySelectorAll('.sq');
  sqAll.forEach(function (i) {
    i.addEventListener("mouseover", function() {
      this.style.backgroundColor = getRandomColor();
    });
  });
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomColor() {
  let randomValue1 = getRandomInt(0, 255);
  let randomValue2 = getRandomInt(0, 255);
  let randomValue3 = getRandomInt(0, 255);
  let randomVStr1 = randomValue1.toString();
  let randomVStr2 = randomValue2.toString();
  let randomVStr3 = randomValue3.toString();
  let randomColor = "rgb(" + randomVStr1 + "," + randomVStr2 + "," + randomVStr3 + ")";
  return randomColor;
}


function stayDefault() {
  document.querySelectorAll('.sq').forEach(e => e.style.background = "rgb(248, 240, 227)");
}


function changeColors() {
  let colorResult = getRandomColor();
  document.querySelectorAll('.sq').forEach(e => e.style.background = colorResult);
}
  