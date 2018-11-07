var cardsArray;
cardsArray = [
    {name: 'bluefin', src: "memory%20match%20images/bluefin.jpg"},
    {name: 'bluefin', src: "memory%20match%20images/bluefin.jpg"},
    {name: 'bonita', src: "memory%20match%20images/bonita1.jpg"},
    {name: 'bonita', src: "memory%20match%20images/bonita1.jpg"},
    {name: 'calico', src: "memory%20match%20images/calico%20bass.jpg"},
    {name: 'calico', src: "memory%20match%20images/calico%20bass.jpg"},
    {name: 'halibut', src: "memory%20match%20images/California_halibut.jpg"},
    {name: 'halibut', src: "memory%20match%20images/California_halibut.jpg"},
    {name: 'dorado', src: "memory%20match%20images/dorado_t658_t658.jpg"},
    {name: 'dorado', src: "memory%20match%20images/dorado_t658_t658.jpg"},
    {name: 'sheephead', src: "memory%20match%20images/sheephead.jpg"},
    {name: 'sheephead', src: "memory%20match%20images/sheephead.jpg"},
    {name: 'white seabass', src: "memory%20match%20images/white%20seabass.jpg"},
    {name: 'white seabass', src: "memory%20match%20images/white%20seabass.jpg"},
    {name: 'yellowfin', src: "memory%20match%20images/yellowfin.jpg"},
    {name: 'yellowfin', src: "memory%20match%20images/yellowfin.jpg"},
    {name: 'yellowtail', src: "memory%20match%20images/Yellowtail.jpg"},
    {name: 'yellowtail', src: "memory%20match%20images/Yellowtail.jpg"}
];

$(document).ready(readySetGo);

front.css("background-image",)
function readySetGo(){
    createCards()
}

function createCards() {
    for (x = 0; x < cardsArray.length; x++){
        var cardContainer = $('<div>')
        cardContainer.addClass('card-container');
        var card = $('<div>');
        card.addClass('front card');
        $('.game-board').append(cardContainer);
        cardContainer.append(card)
    }
}

function randomizeCards(){
    var random_number;
    random_number = Math.floor(Math.random() * cardsArray.length)
}
function showClickedCard(){
    
}

function removeMatchedCards(){

}

function resetGame(){
    readySetGo()
}

