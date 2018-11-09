var cardsArray;
cardsArray = [
    {name: 'babeRuth', 'img': "memorymatchimages/baberuth.jpg"},
    {name: 'babeRuth', 'img': "memorymatchimages/baberuth.jpg"},
    {name: 'honusWagner', 'img': "memorymatchimages/honuswagner.jpg"},
    {name: 'honusWagner', 'img': "memorymatchimages/honuswagner.jpg"},
    {name: 'johnnyBench', 'img': "memorymatchimages/johnnybench.jpg"},
    {name: 'johnnyBench', 'img': "memorymatchimages/johnnybench.jpg"},
    {name: 'louGehrig', 'img': "memorymatchimages/lougehrig.jpg"},
    {name: 'louGehrig', 'img': "memorymatchimages/lougehrig.jpg"},
    {name: 'mikeSchmidt', 'img': "memorymatchimages/mikeschmidt.jpg"},
    {name: 'mikeSchmidt', 'img': "memorymatchimages/mikeschmidt.jpg"},
    {name: 'rogerHornsby', 'img': "memorymatchimages/rogerhornsby.jpg"},
    {name: 'rogerHornsby', 'img': "memorymatchimages/rogerhornsby.jpg"},
    {name: 'sandyKoufax', 'img': "memorymatchimages/sandykoufax.jpg"},
    {name: 'sandyKoufax', 'img': "memorymatchimages/sandykoufax.jpg"},
    {name: 'tedWilliams', 'img': "memorymatchimages/tedwilliams.jpg"},
    {name: 'tedWilliams', 'img': "memorymatchimages/tedwilliams.jpg"},
    {name: 'willieMays', 'img': "memorymatchimages/williemays.jpg"},
    {name: 'willieMays', 'img': "memorymatchimages/williemays.jpg"},
];

var newDeck = shuffleArray(cardsArray);

first_card_clicked = null;
second_card_clicked = null;
var match_counter = 0;
var matches = 2;

$(document).ready(readySetGo);

// front.css("background-image",)
function readySetGo(){
    shuffleArray(cardsArray);
    createCards(newDeck);
    toggleCard();
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

function createCards(shuffledArray) {
    for (x = 0; x < cardsArray.length; x++){
        var cardContainer = $('<div>',{
            'class': "card-container"
        });
        var frontImage = $("<img>", {
            'class': 'card card-front',
            src: 'memorymatchimages/baseballfrontpicture.jpg',
            click: toggleCard
            });
        var backImage = $('<img>', {
            'class': 'card card-back',
            src: shuffledArray[x].img,
            // click:
        });
        $('.game-board').append(cardContainer);
        cardContainer.append(frontImage, backImage);
    }
}

function toggleCard() {
    var cardClicked = $(this);
    cardClicked.toggleClass('hide')
}

function matchCheck() {
    if (first_card_clicked = null){
        first_card_clicked = $('.card-back');
        console.log(first_card_clicked);
        return first_card_clicked;
    } else{ 
        if (first_card_clicked === second_card_clicked){
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            if (match_counter === matches){
                console.log("You Won")
            } else {
                console.log("first card");
                return first_card_clicked
            }
        } else{
            
        }
    }
}




// cardArrayShuffled = shuffleArray(cardsArray);

// function showClickedCard(){
//     var newDeck = shuffleArray(cardsArray);
//     // var card = this;
//     for (var x=0; x < newDeck.length; x++){
//         card.on('click', function () {
//             card.removeClass('card-front');
//             card.css({
//                 'background-repeat': 'no-repeat',
//                 'background-size': 'contain',
//                 // 'background-image': 'url': newDeck.src[x]
//             })
//         });
//     }
//     console.log(newDeck)
// }
// // function matchedCards(){
// //     if (blah blah === blah blah){
// //         blah blah.remove();
// //     }
// // }
//
// function resetGame(){
//     readySetGo()
// }

