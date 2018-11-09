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
var matches = 9;
var flag = false;

$(document).ready(readySetGo);

// front.css("background-image",)
function readySetGo(){
    shuffleArray(cardsArray);
    createCards(newDeck);
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
        var card = $('<div>', {
            'class': 'card'
        });
        var frontImage = $("<div>", {
            'class': 'card-front',
            css: {
                'background-image': 'url("memorymatchimages/baseballfrontpicture.jpg")'
            },
            on: {
                click: clickCard
            }
        });
        var backImage = $('<div>', {
            'class': 'card-back',
            css:{
                'background-image': 'url('+shuffledArray[x].img+')'
            },
            on:{
            click: clickCard
            }
        });
        $('.game-board').append(cardContainer);
        cardContainer.append(card);
        card.append(backImage, frontImage);
    }
}


function clickCard() {
        $(this).addClass('hide');
        console.log('clicked the card');
        if (first_card_clicked === null){
            first_card_clicked = this;
            return first_card_clicked;
        } else{
            console.log('second');
            second_card_clicked = this;
            console.log('this is the second card');
            var firstCard = $(first_card_clicked).find('.card-back').css('background-image');
            var secondCard = $(second_card_clicked).find('.card-back').css('background-image');
            if (firstCard === secondCard){
                match_counter++;
                console.log('Matching Cards');
            }
        }
}


//Needs a way to recognize a match...
//to only allow two cards to be clicked at a time..after two cards are clicked, if not matching, delay 2s...then flip back over
//needs a way to remove matched cards
//after all 9 matches have been found, you win




    //     $('')
    //     if (first_card_clicked === null){
    //         first_card_clicked = this;
    //         console.log(first_card_clicked);
    //         return first_card_clicked;
    //     } else{
    //         second_card_clicked = this;
    //         var firstCard = $(firstClickedCard).find('.card-back').html('src');
    //         var secondCard = $(second_card_clicked).find('.card-back').html('src');
    //         if (firstCard === secondCard)
    //             match_counter++;
    //             first_card_clicked = null;
    //             second_card_clicked = null;
    //             if (match_counter === matches){
    //                 console.log("You Won")
    //             } else {
    //                 console.log("first card");
    //                 return first_card_clicked
    //             }
    //         }
    //     }
    //     console.log(match_counter);
    // }




