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

cardArrayShuffled =

$(document).ready(readySetGo);

// front.css("background-image",)
function readySetGo(){
    createCards()
}

function createCards() {
    for (x = 0; x < cardsArray.length; x++){
        var cardContainer = $('<div>',{
            'class': "card-container"
        });
        var front = $('<div>', {
            "class": "card-front",
            'display': 'none'
        });
        var back = $('<div>', {
            'class': 'card-back',
            'background-image': cardsArray[x].src,
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            // 'display': 'none'
        });
        $('.game-board').append(cardContainer);
        cardContainer.append(front, back)
    }
}

function shuffleArray(array) {
        var j, x, i;
        for (i = array.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = array[i - 1];
            array[i - 1] = array[j];
            array[j] = x;
        }
        return array
}

// function randomNumber(){
//     var random_card = cardsArray.length;
//     random_picture_array = [];
//     for (x = 0; x < random_card; x++){
//         random_value = Math.floor(Math.random() * random_card);
//         random_picture_array.length--;
//         FrontPicArr.splice(randomNumber, 1);
//     }
// }

function showClickedCard(){
    var newDeck = shuffleArray(cardsArray);
    return newDeck;
}
// function matchedCards(){
//     if (blah blah === blah blah){
//         blah blah.remove();
//     }
// }

function resetGame(){
    readySetGo()
}

