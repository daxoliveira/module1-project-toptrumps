// Step 1 - Set up class constructor of card objects

class Card {
  constructor(name, picture, likeability, screenTime, numberOfKills) {
    this.name = name;
    this.picture = picture;
    this.likeability = likeability;
    this.screenTime = screenTime;
    this.numberOfKills = numberOfKills;
  }
}

// Step 2 - Create 10 cards and store them in an array

const daenerysTargaryen = new Card('Daenerys Targaryen', './images/1daenerysTargaryen.jpg', 100, 100, 100);
const jonSnow = new Card('Jon Snow', './images/2jonSnow.jpg', 99, 99, 99);
const tyrionLannister = new Card('Tyrion Lannister', './images/3tyrionLannister.jpg', 98, 98, 98);
const sansaStark = new Card('Sansa Stark', './images/4sansaStark.jpg', 97, 97, 97);
const cerseiLannister = new Card('Cersei Lannister', './images/5cerseiLannister.jpg', 96, 96, 96);
const joffreyBaratheon = new Card('Joffrey Baratheon', './images/6joffreyBaratheon.jpg', 95, 95, 95);
const eddardStark = new Card('Eddard Stark', './images/7eddardStark.jpg', 94, 94, 94);
const aryaStark = new Card('Arya Stark', './images/8aryaStark.jpg', 93, 93, 93);
const brienneOfTarth = new Card('Brienne of Tarth', './images/9brienneOfTarth.jpg', 92, 92, 92);
const ramsayBolton = new Card('Ramsay Bolton', './images/10ramsayBolton.jpg', 91, 91, 91);

const unshuffledDeck = [];
unshuffledDeck.push(daenerysTargaryen, jonSnow, tyrionLannister, sansaStark, cerseiLannister, joffreyBaratheon, eddardStark, aryaStark, brienneOfTarth, ramsayBolton);

// Step 3 - "Game Start Button" - Set shuffle,deal, and display functions ------------------------
// a) Shuffle - Shuffle the 10 cards

const shuffledDeck = [];

const shuffle = () => {
  for (let i = 0; i < 10; i += 1) {
    const random = Math.floor(Math.random() * unshuffledDeck.length);
    shuffledDeck.push(unshuffledDeck[random]);
    unshuffledDeck.splice(random, 1);
  }
};


// b) Deal - Divide into 2 arrays and assign the first array to Player and the second to Computer

let playerDeck;
let computerDeck;

const deal = () => {
  playerDeck = shuffledDeck.slice(0, shuffledDeck.length / 2);
  computerDeck = shuffledDeck.slice(5);
};

// "Game Start" - function for game start button

const startGame = () => {
  shuffle();
  deal();
  document.getElementById('playerCardName').innerHTML = playerDeck[0].name;
  document.getElementById('playerCardImage').src = playerDeck[0].picture;
  document.getElementById('playerCardLikeability').innerHTML = playerDeck[0].likeability;
  document.getElementById('playerCardScreenTime').innerHTML = playerDeck[0].screenTime;
  document.getElementById('playerCardNumberOfKills').innerHTML = playerDeck[0].numberOfKills;

  document.getElementById('computerCardName').innerHTML = computerDeck[0].name;
  document.getElementById('computerCardImage').src = computerDeck[0].picture;
  document.getElementById('computerCardLikeability').innerHTML = computerDeck[0].likeability;
  document.getElementById('computerCardScreenTime').innerHTML = computerDeck[0].screenTime;
  document.getElementById('computerCardNumberOfKills').innerHTML = computerDeck[0].numberOfKills;
};

// DOM Manipulation

const startButton = document.getElementById('gameStartButton');

startButton.onclick = function() {
  startGame();
  document.getElementById('playerCardCover').className = 'd-none';
  document.getElementById('playerCardDiv').className = 'card';
  document.getElementById('playerCardsNumber').innerHTML = playerDeck.length;
  document.getElementById('computerCardsNumber').innerHTML = computerDeck.length;
};

let playerCardLikeability = document.getElementById('playerCardLikeabilityButton');

let playerCardScreenTime = document.getElementById('playerCardScreenTimeButton');

let playerCardNumberOfKills = document.getElementById('playerCardNumberOfKillsButton');


playerCardLikeability.onclick = function() {
  pickCategory('Likeability');
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  checkWinner ();
};

playerCardScreenTime.onclick = function() {
  pickCategory('Screen Time');
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  checkWinner ();
};

playerCardNumberOfKills.onclick = function() {
  pickCategory('Number of Kills');
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  checkWinner ();
};
// Step 4 - Set "Play Round Function"

// a) Set function in which the player picks category on-click

const pickCategory = (category) => {
  console.log(category);
  let roundCard;
  switch (category) {
    case 'Likeability':
      if (playerDeck[0].likeability > computerDeck[0].likeability) {
        roundCard = computerDeck.shift();
        playerDeck.push(roundCard);
      } else {
        roundCard = playerDeck.shift();
        computerDeck.push(roundCard);
      }
      break;

    case 'Screen Time':
      if (playerDeck[0].screenTime > computerDeck[0].screenTime) {
        roundCard = computerDeck.shift();
        playerDeck.push(roundCard);
      } else {
        roundCard = playerDeck.shift();
        computerDeck.push(roundCard);
      }
      break;

    case 'Number of Kills':
      if (playerDeck[0].numberOfKills > computerDeck[0].numberOfKills) {
        roundCard = computerDeck.shift();
        playerDeck.push(roundCard);
      } else {
        roundCard = playerDeck.shift();
        computerDeck.push(roundCard);
      }
      break;
    default:
      console.log('You need to click on one of the categories in order to go on with the game!');
      break;
  }
  let playerCardsNumber = document.getElementById('playerCardsNumber');
  let computerCardsNumber = document.getElementById('computerCardsNumber');
  playerCardsNumber.innerHTML = `${playerDeck.length}`;
  computerCardsNumber.innerHTML = `${computerDeck.length}`;
};

// Step 5 - Set "Check Winner" function

const checkWinner = () => {
  if (playerDeck.length === 0) {
    console.log('The computer has won the game! GAME OVER!');
  }
  if (computerDeck.length === 0) {
    console.log('You have won the game! GAME OVER!');
  }
  return console.log(`The game is still going, the current score is Player ${playerDeck.length} cards vs. Computer ${computerDeck.length} cards!`);
};
