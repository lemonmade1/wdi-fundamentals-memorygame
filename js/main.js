const cards = [
  "queen", 
  "queen", 
  "king", 
  "king"
];

const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match.");
  } else {
    alert("Sorry, try again.")
  }
}

// let cardThree = cards[2];
// cardsInPlay.push(cardThree);

// let cardFour = cards[3];
// cardsInPlay.push(cardFour)

console.log(`User flipped the ${cardOne}`);
console.log(`User flipped the ${cardTwo}`);