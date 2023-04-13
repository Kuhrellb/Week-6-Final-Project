
const VALUES = [1,2,3,4,5,6,7,8,9,10,"J","K","Q","A"]
const SUITS = ["♠","♣", "♥","♦"];
const player1Points = [];
const player2Points = [];
let playerSum = 0
let player1Deck, player2Deck;
let ranksValue = {
     "2" : 2,
     "3" : 3,
     "4" : 4,
     "5" : 5,
     "6" : 6,
     "7" : 7,
     "8" : 8,
     "9" : 9,
     "10" : 10,
     "J" : 11,
     "K" : 12,
     "Q" : 13,
     "A" : 14
    };
// Assigns all card values a dynamic rank value
class Deck {
    constructor(cards = createNewDeck()) {
        this.cards = cards
    }
    get cardAmount(){
        return this.cards.length;                       //getter used to get the deck amount and return the full deck
    }
    pop(){
        return this.cards.shift
    }
    shuffleDeck(){
        for(let i = this.cardAmount - 1; i > 0; i--){     // For loop that goes through card index starting in the back and swithes it with a index that we havent reached yet. Whhich shuffles the cards
            const newIndex = Math.floor(Math.random() * (i + 1))       // Gives us the index we havent acessed yet
            const oldValue = this.cards[newIndex]       
            this.cards[newIndex]= this.cards[i]
            this.cards[i]= oldValue
        }
    }
} 

function createNewDeck(){
    
    return SUITS.flatMap( suits => {       //flap map takes 4 card suits arrays and makes them one full array which will be the deck of card.
        return VALUES.map( values => {       //loops through each value
            return new Card(suits, values) // creates a new card with a suit and value
        })
    })
    
}

// Allows you to store the amount of cards as a variable to call when needed
function averageArray(array1){
    playerSum = array1.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue

    }); if (typeof array1 == String || typeof array1 == Boolean){
        throw new Error ("array1 must be a number");
    }
        return playerSum;
}
class Card{
    constructor(suits, values ) {
        this.suits = suits;
        this.values = values;

    }
} 
// Creates a card class saying a card has 2 properties, those being a suit and value


   
const deck = new Deck ();
deck.shuffleDeck();
// Takes the created deck and shuffles for a new game

player1Deck = ( deck.cards.slice(0, 26));
player2Deck = ( deck.cards.slice(26, 52));
console.log(player1Deck);
console.log(player2Deck);
//this is essentially the deck dealer; the slice method is used to split the already shuffled deck in half and assign player 1 and 2 there halves of the deck.
for(let i = 0; i < 26; i++){
const p1Card = player1Deck.pop();
const p2Card = player2Deck.pop();
//me pop is used to "pop" or pul a card from each players deck to be compared

if (ranksValue[p1Card.values] > ranksValue[p2Card.values]){
    player1Points.push(ranksValue[p2Card.values], ranksValue[p1Card.values])
    console.log("Player 1 wins")
}else if(ranksValue[p2Card.values] > ranksValue[p1Card.values]){
        player2Points.push(ranksValue[p2Card.values], ranksValue[p1Card.values])
        console.log("Player 2 wins")
}else{
    console.log("Tie");
    }
}
// if.. else if loop is used to compare the player cards that were "popped" and assign a round winner or tie 
let player1Sum = averageArray(player1Points);
let player2Sum = averageArray(player2Points);
if (player1Sum> player2Sum){
    console.log(`Player 1 Wins with ${player1Sum} points!`);
} else if (player2Sum > player1Sum){
    console.log(`Player 2 Wins with ${player2Sum} points!`);
}else{
    console.log("Tie")
}
//another if .. else if loop is used to determine which player has won the game based off of the point incrimaton or determine whether or not there is a tie
