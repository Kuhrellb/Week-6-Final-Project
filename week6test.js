
/* ----------------------------------------------------- */

const expect = chai.expect;
const assert = chai.assert;

describe('War Games Test:', () => {
    describe('Create Card ', () => {
        it('#Should create a card obecjt with 2 parameters', () => {
         console.log('CARD');
     let suits = '♥';
     let values = '7';
     let card = new Card(suits, values)
     console.log(card)
     expect(card).to.deep.equal({ suits : suits, values : values});

    });

    describe('Shuffle Cards', () => {
        it('#Should return an array that is randomized in order', function(){
        
        const deck = new Deck
        let shuffleCards = deck.shuffleDeck();
        const freshDeck = new Deck;
        const shuffledDeck = new Deck;
        shuffleCards = shuffledDeck.shuffleDeck();
        chai.assert.notDeepEqual(shuffledDeck, freshDeck.deck)

            });
        });
    });
});
 
