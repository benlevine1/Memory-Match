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
var games_played = 0;
var attempts = 0;
var matches = 9;
var flag = true;
var accuracy;

$(document).ready(readySetGo);

function readySetGo(){
    shuffleArray(cardsArray);
    createCards(newDeck);
    resetGame();
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
        if (first_card_clicked === null){
            first_card_clicked = $(this);
            $(this).addClass('hide');
        } else{
            second_card_clicked = $(this);
            $(this).addClass('hide');
            var firstCard = first_card_clicked.siblings('.card-back').css('background-image');
            var secondCard = second_card_clicked.siblings('.card-back').css('background-image');
            if (firstCard === secondCard){
                //Found a match
                var matchNumber = $('.matches .value');
                match_counter++;
                matchNumber.text(match_counter + ' ');
                attempts++;
                var attemptsValue=$('.attempts .value');
                attemptsValue.text(attempts + ' ');
                var cards = $('.card-front, .card-back');
                cards.off('click');
                setTimeout(function(){
                    pairMatchAnimation(first_card_clicked, second_card_clicked);
                    cards.on('click', clickCard);
                    first_card_clicked = null;
                    second_card_clicked = null;
                },1500);
                if (match_counter === matches){
                    //All matches found
                    winningDisplay();
                }
            } else {
                //Not a Match
                var cards = $('.card-front, .card-back');
                cards.off('click');
                flag = true;
                setTimeout(function(){
                    nonPairMatchAnimation();
                    cards.on('click', clickCard);
                    first_card_clicked = null;
                    second_card_clicked = null;
                },1500);
                attempts++;
                var attemptsValue=$('.attempts .value');
                attemptsValue.text(attempts + ' ');

                if(match_counter >= 0 && match_counter < 9){
                    accuracy = match_counter/attempts;
                    var accuracyValue= $('.accuracy .value');
                    accuracyValue.text(Math.floor(accuracy * 100)+'%');
                } else{
                    winningDisplay();
                }
            }
        }
}

function pairMatchAnimation(card1, card2) {
    card2.parents('.card').addClass('hide');
    card1.parents('.card').addClass('hide');

}

function nonPairMatchAnimation() {
    second_card_clicked.removeClass('hide');
    first_card_clicked.removeClass('hide');
}

function winningDisplay () {
    var winningImage = $('body');
    winningImage.css({
        'background-image': 'url("memorymatchimages/winningimage.jpg")',
        'background-size': 'cover'
    });
}
function resetGame() {
    debugger;
    var reset = $('.reset');
    reset.click(function () {
        debugger;
        games_played++;
        var games = $('.games-played .games-counter');
        games.text(games_played + '');
        var stats = $('#stats-container .value');
        stats.empty();
        var cards = $('.card-container');
        cards.remove();
        shuffleArray(cardsArray);
        createCards(newDeck);
    })
}




//Needs a way to recognize a match...
//to only allow two cards to be clicked at a time..after two cards are clicked, if not matching, delay ...then flip back over
//needs a way to remove matched cards
//after all 9 matches have been found, you win






