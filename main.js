var cardsArray;
cardsArray = [
    {name: 'arches', 'img': "memorymatchimages/arches.png"},
    {name: 'arches', 'img': "memorymatchimages/arches.png"},
    {name: 'canyonlands', 'img': "memorymatchimages/canyonlands.png"},
    {name: 'canyonlands', 'img': "memorymatchimages/canyonlands.png"},
    {name: 'channelislands', 'img': "memorymatchimages/channelislands.png"},
    {name: 'channelislands', 'img': "memorymatchimages/channelislands.png"},
    {name: 'deathvalley', 'img': "memorymatchimages/deathvalley.png"},
    {name: 'deathvalley', 'img': "memorymatchimages/deathvalley.png"},
    {name: 'grandcanyon', 'img': "memorymatchimages/grandcanyon.png"},
    {name: 'grandcanyon', 'img': "memorymatchimages/grandcanyon.png"},
    {name: 'grandteton', 'img': "memorymatchimages/grandteton.png"},
    {name: 'grandteton', 'img': "memorymatchimages/grandteton.png"},
    {name: 'jtree', 'img': "memorymatchimages/jtree.png"},
    {name: 'jtree', 'img': "memorymatchimages/jtree.png"},
    {name: 'yosemite', 'img': "memorymatchimages/yosemite.png"},
    {name: 'yosemite', 'img': "memorymatchimages/yosemite.png"},
    {name: 'zion', 'img': "memorymatchimages/zion.png"},
    {name: 'zion', 'img': "memorymatchimages/zion.png"},
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
                'background-image': 'url("memorymatchimages/nationalparkservice.png")'
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

function flipCard(card){
    $(card).addClass('hide')
}


function clickCard() {
        if (first_card_clicked === null){
            first_card_clicked = $(this);
            flipCard(this);
            first_card_clicked.siblings('.card-back').off();
        } else{
            second_card_clicked = $(this);
            flipCard(this);
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
                accuracy = match_counter/attempts;
                var accuracyValue= $('.accuracy .value');
                accuracyValue.text(Math.floor(accuracy * 100)+'%');
                var cards = $('.card-front, .card-back');
                cards.off('click');
                setTimeout(function(){
                    pairMatchAnimation(first_card_clicked, second_card_clicked);
                    cards.on('click', clickCard);
                    first_card_clicked = null;
                    second_card_clicked = null;
                },1200);
                if (match_counter === matches){
                    //All matches found
                    winningDisplay();
                }
            } else {
                //Not a Match
                // debugger;
                var cards = $('.card-front, .card-back');
                cards.off('click');
                flag = true;
                second_card_clicked.siblings('.card-back').addClass('shake')
                first_card_clicked.siblings('.card-back').addClass('shake')
                setTimeout(function(){
                    nonPairMatchAnimation();
                    cards.on('click', clickCard);
                    second_card_clicked.siblings('.card-back').removeClass('shake')
                    first_card_clicked.siblings('.card-back').removeClass('shake')
                    first_card_clicked = null;
                    second_card_clicked = null;
                },700);
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
    $('.modal-container').removeClass('hide')
    // var winningImage = $('body');
    // winningImage.css({
    //     'background-image': 'url("memorymatchimages/winningimage.jpg")',
    //     'background-size': 'cover'
    // });
}
function resetGame() {
    var reset = $('.reset');
    reset.click(function(){
        if(attempts===0){
            return
        }
        var winningImage = $('body');
        winningImage.css({
            'background-image': 'url("memorymatchimages/Mirror-Lake-Summer-9.jpg")'
        });
        attempts = 0;
        match_counter=0;
        matches=9;
        accuracy=undefined;
        games_played++;
        var games = $('.games-played .games-counter');
        games.text(games_played + '');
        var stats = $('#stats-container .value');
        stats.empty();
        $('.matches .value').text('0');
        $('.attempts .value').text('0');
        $('.accuracy .value').text('0%');

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






