console.log("hello js");

////////////// VARIABLES  //////////////

//CARD DECK
var suits = ["spades", "hearts", "diamonds", "clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = cardsDeck();

//PLAYERS
var playerHand = [];
var playerPoints = 0;
var dealerHand = [];
var dealerPoints = 0;
const handMaxValue = 21;

//BANK
var bank = 500;
let currentBet = 0;
const minimumInBank = 5;

//GAMEPLAY
let gamePlay = false;

////////////// EVENT LISTENERS  //////////////

document.getElementById("totalInBank").innerHTML = bank;
document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;

document.getElementById("playerPoints").innerHTML = playerPoints;
document.getElementById("dealerPoints").innerHTML = dealerPoints;

////////////// FUNCTIONS  //////////////

// **** Choose how much you want to bet by clicking on the different coins ****

function addFiveToBet(){
    if(gamePlay === false){
        clearPlayerPannel();
        clearDealerPannel();
        document.getElementById("playerPoints").innerHTML = playerPoints;
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        currentBet += 5;
        document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
        console.log(currentBet);
    } else{
        Swal.fire({
            text: "You can't bet anymore. The game is ongoing. Focus on it!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}
function addFithtyToBet(){
    if(gamePlay === false){
        clearPlayerPannel();
        clearDealerPannel();
        document.getElementById("playerPoints").innerHTML = playerPoints;
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        currentBet += 50;
        document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
        console.log(currentBet);
    } else{
        Swal.fire({
            text: "You can't bet anymore. The game is ongoing. Focus on it!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}
function addOneHundredToBet(){
    if(gamePlay === false){
        clearPlayerPannel();
        clearDealerPannel();
        document.getElementById("playerPoints").innerHTML = playerPoints;
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        currentBet += 100;
        document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
        console.log(currentBet);
    } else{
        Swal.fire({
            text: "You can't bet anymore. The game is ongoing. Focus on it!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}
function addFiveHundredToBet(){
    if(gamePlay === false){
        clearPlayerPannel();
        clearDealerPannel();
        document.getElementById("playerPoints").innerHTML = playerPoints;
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        currentBet += 500;
        document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
        console.log(currentBet);
    } else{
        Swal.fire({
            text: "You can't bet anymore. The game is ongoing. Focus on it!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}

// **** Run resetCurrentBet once button RESET is clicked ****

function resetCurrentBet(){
    if(gamePlay === false){
        currentBet = 0;
        document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
        console.log(currentBet);
    } else{
        //alert("You can't reset your bet anymore. The game is ongoing. Focus on it!");
        Swal.fire({
            text: "You can't reset your bet anymore. The game is ongoing. Focus on it!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}

// **** Run startGame() once button BET is clicked ****

function startGame(){
    console.log(currentBet);
    console.log(deck);
        if (currentBet > bank || currentBet == 0 || gamePlay === true){
            currentBet = 0;
            document.getElementById("currentBet").innerHTML = "Current Bet is $" + currentBet;
            Swal.fire({
                text: "Not enough money or unsufficient bet.",
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
        else{
            gamePlay = true;
            decreaseBank();
            clearPlayerPannel();
            clearDealerPannel();
            cardsDeck();
            dealPlayerFirstHand();
            console.log(playerHand);
            getPlayerPoints(); 
            displayPlayerCards(); 
            document.getElementById("playerPoints").innerHTML = playerPoints;
            dealDealerFirstHand();
            console.log(dealerHand);
            getDealerPoints();
            displayDealerCards();
            checkGameStatus();
            checkBank();
        }
}

//decrease bank
function decreaseBank(){
    document.getElementById("totalInBank").remove = bank;
    bank = bank - currentBet;
    document.getElementById("totalInBank").innerHTML = bank;
}

//increase bank
function increaseBank(){
    document.getElementById("totalInBank").remove = bank;
    bank += (currentBet * 2);
    document.getElementById("totalInBank").innerHTML = bank;
}

function resetBank(){
    document.getElementById("totalInBank").remove = bank;
    bank += currentBet;
    document.getElementById("totalInBank").innerHTML = bank;
}


//create a full deck of 52 cards from var suits and var numbers
function cardsDeck(){
    deck = new Array();
    for (let i = 0 ; i < values.length; i++){
        for(let x = 0; x < suits.length; x++){
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    return deck;
}
//console.log(deck[4]);
//if correct, deck[4] should return 3 of spades.

//Distribute 2 cards to User
function dealPlayerFirstHand(){
    for(let i = 0; i < 2; i++){
        var card = deck[Math.floor(Math.random() * deck.length)];
        deck.pop(card);
        playerHand.push(card);
    }
}
// dealPlayerFirstHand();
// console.log(playerHand);

//Distribute 2 cards to computer
function dealDealerFirstHand(){
    for(let i = 0; i < 2; i++){
        var card = deck[Math.floor(Math.random() * deck.length)];
        deck.pop(card);
        dealerHand.push(card);
    }
}
// dealDealerFirstHand();
// console.log(dealerHand);

// **** if button Hit is clicked ****

function hit(){
    console.log("Hit was clicked");
    if(gamePlay === false){
        Swal.fire({
            text: "You need to bet some $$$ first!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }else{
        dealPlayerCard();
        getPlayerPoints();
        clearPlayerPannel();
        displayPlayerCards();
        document.getElementById("playerPoints").innerHTML = playerPoints;
        //console.log(playerHand);
        checkGameStatus();
        checkBank();
    }
}

//Deal One Card to Player
function dealPlayerCard(){
    for(let i = 0; i < 1; i++){
        var card = deck[Math.floor(Math.random() * deck.length)];
        deck.pop(card);
        playerHand.push(card);
    }
}

//Get and update the points count
function getPlayerPoints(){
        playerPoints = 0;
        for(var i = 0; i < playerHand.length; i++){
            playerPoints += playerHand[i].Weight;
        }
    console.log(playerPoints);
}

function getDealerPoints(){
    dealerPoints = 0;
    for(var i = 0; i < dealerHand.length; i++){
        dealerPoints += dealerHand[i].Weight;
    }
console.log(dealerPoints);
}

//Check if below, above or equal to 21
function checkGameStatus(){
    if(playerPoints > handMaxValue || dealerPoints == handMaxValue){
        document.getElementById("messageBox").innerHTML = "YOU LOSE";
        console.log("YOU LOSE");
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        clearDealerPannel();
        revealAllDealerCards();
        currentBet = 0;
        gamePlay = false;
        playerHand = [];
        dealerHand = [];
        playerPoints = 0;
        dealerPoints = 0;
    }
    else if(playerPoints == handMaxValue || dealerPoints > handMaxValue){
        document.getElementById("messageBox").innerHTML = "YOU WIN";
        console.log("YOU WIN");
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        clearDealerPannel();
        revealAllDealerCards();
        increaseBank();
        gamePlay = false;
        currentBet = 0;
        playerHand = [];
        dealerHand = [];
        playerPoints = 0;
        dealerPoints = 0;
    }
    else if(playerPoints < handMaxValue){
        console.log("HIT OR STAND?");
        document.getElementById("messageBox").innerHTML = "HIT or STAND?";
    }
}

// **** if button Stand is clicked ****

function stand(){
    console.log("Stand was clicked");
    if(gamePlay === false){
        Swal.fire({
            text: "You need to bet some $$$ first!",
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }else{
        dealDealerCard();
        getDealerPoints();
        clearDealerPannel();
        revealAllDealerCards();
        document.getElementById("dealerPoints").innerHTML = dealerPoints;
        //console.log(dealerHand);
        finalCheckGameStatus();
        checkBank();
    }
}

//Deal 1 card to the dealer
function dealDealerCard(){
    if(dealerPoints < playerPoints){
        for(let i = 0; i < 1; i++){
            var card = deck[Math.floor(Math.random() * deck.length)];
            deck.pop(card);
            dealerHand.push(card);
        }
    } else {
        console.log("do nothing")
    }
}

//Check the status of the game one last time before declaring a winner
function finalCheckGameStatus(){
    if(playerPoints > handMaxValue || dealerPoints == handMaxValue || (dealerPoints > playerPoints && dealerPoints < handMaxValue)){
        document.getElementById("messageBox").innerHTML = "YOU LOSE";
        console.log("YOU LOSE");
        currentBet = 0;
        gamePlay = false;
        playerHand = [];
        dealerHand = [];
        playerPoints = 0;
        dealerPoints = 0;
    }
    else if(playerPoints == handMaxValue || dealerPoints > handMaxValue || (playerPoints > dealerPoints && playerPoints < handMaxValue)){
        document.getElementById("messageBox").innerHTML = "YOU WIN";
        console.log("YOU WIN");
        increaseBank();
        gamePlay = false;
        currentBet = 0;
        playerHand = [];
        dealerHand = [];
        playerPoints = 0;
        dealerPoints = 0;
    }
    else{
        document.getElementById("messageBox").innerHTML = "THAT'S A TIE";
        console.log("TIE");
        resetBank();
        gamePlay = false;
        currentBet = 0;
        playerHand = [];
        dealerHand = [];
        playerPoints = 0;
        dealerPoints = 0;
    }
console.log(deck);
}


////////////// FUNCTIONS TO DISPLAY CARDS  //////////////


//Display the player's cards
function displayPlayerCards(){
    for(let i = 0; i < playerHand.length; i++){
        let newPlayerCard = document.createElement("img");
        document.getElementsByClassName("player__pannel")[0].appendChild(newPlayerCard);
        let cardSuit = playerHand[i].Suit;
        let cardValue = playerHand[i].Value;
        newPlayerCard.setAttribute("src", "./css/cards/" + cardValue + "_of_" + cardSuit + ".png");
        newPlayerCard.setAttribute("class", "playerHand");
    }
}

//Display the first 2 cards for dealer - always turned around for first card
function displayDealerCards(){
    for(let i = 0; i < dealerHand.length; i++){
        let newPlayerCard = document.createElement("img");
        document.getElementsByClassName("dealer__pannel")[0].appendChild(newPlayerCard);
        let cardSuit = dealerHand[i].Suit;
        let cardValue = dealerHand[i].Value;
        newPlayerCard.setAttribute("src", "./css/cards/" + cardValue + "_of_" + cardSuit + ".png");
        newPlayerCard.setAttribute("class", "dealerHand");
    }
    let parent = document.getElementsByClassName("dealer__pannel")[0];
    parent.firstChild.setAttribute("src", "./css/cards/card_back.png");
}

//Reveal all dealer cards once round finishes
function revealAllDealerCards(){
    for(let i = 0; i < dealerHand.length; i++){
        let newPlayerCard = document.createElement("img");
        document.getElementsByClassName("dealer__pannel")[0].appendChild(newPlayerCard);
        let cardSuit = dealerHand[i].Suit;
        let cardValue = dealerHand[i].Value;
        newPlayerCard.setAttribute("src", "./css/cards/" + cardValue + "_of_" + cardSuit + ".png");
        newPlayerCard.setAttribute("class", "dealerHand");
    }
}

//Clear the player cards before distributing new ones or starting new round
function clearPlayerPannel(){
    let parent = document.getElementsByClassName("player__pannel")[0];
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

//Clear the dealer cards before distributing new ones or starting new round
function clearDealerPannel(){
    let parent = document.getElementsByClassName("dealer__pannel")[0];
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function checkBank(){
    if(bank === 0 && currentBet === 0){
        Swal.fire({
            title: 'LOSER!',
            text: 'Refresh your page to start a new game',
            imageUrl: './css/loser1.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
    else if(bank >= 1000){
        Swal.fire({
            title: 'Well done for reaching $1000!',
            imageUrl: './css/well-played.png',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
    }
}