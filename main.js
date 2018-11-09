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
            'class': 'card',
            src: 'memorymatchimages/baseballfrontpicture.jpg',
            click: toggleCard
            });
        var backImage = $('<img>', {
            'class': 'card',
            src: shuffledArray[x].img,
            click: toggleCard
        });
        $('.game-board').append(cardContainer);
        cardContainer.append(frontImage, backImage);
        console.log(shuffledArray[x])
    }
}

function toggleCard() {
    var cardClicked = $(this);
    cardClicked.toggleClass('hide')
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

