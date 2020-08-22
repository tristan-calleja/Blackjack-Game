# BLACKJACK GAME

## MVP:
• javascript to pick cards, display them and count current
• create cards using html and css

## MAIN FUNCTIONS TO BE USED:
• random for cards to be picked
• conditions (a lot) 
Stand = don’t pick - Deal=pick - 21 = game won, etc.
• event listeners

## FURTHERS:
• get the player’s name and use it
• Keep count of games played
• set intervals so that there is a bit of time between turns message display
• Music when you win a certain number of turns.

## GOAL:
• this game will help me understand CSS better
• this game will help me review and shore up my javascript basics


## /////// FIRST STEPS ////////

The first thing I did was drawing a sketch of the game. This helped get the layout of my game, even though there were iterations afterwards.

Then I had to work out the game flow. The below was my initial game flow where I forgot a lot of variables but that helped me getting started on the project:

        **USER INTERACTION**

        BET: player decides amount he bets. 

        EventListener on all token buttons -> link to value.
            -> push values to an array currentBet (var) 

        EventListener on validate bet -> launching betValidation (function)
            If more than bank (var) 
                -> alert message “not possible”
                -> empty array currentBet (=[])
            else if ok 
                -> sum of currentBet = playerBet (var) 
                -> bank -= playerBet;
                -> In div class="current__bet" -> H3 -> create a child <p>.
                -> push playerBet to this <p>.
                -> setInterval 1sec and start function displayFirstDeal(function)
                -> push message to message box: “

        Create displayFirstDeal(function):
            Math floor/random
            2 cards are picked for each player and displayed in the html - hide player 2, card 1 -> always the back of the card. 


        - BET: Player 1 bets an amount that’s deducted from his “bank” once he hits button bet.
            -> Initialise function displayFirstDeal
        - displayFirstDeal:  2 cards are picked for each player and displayed in the html - hide player 2, card 1 -> always the back of the card. 

        **USER INTERACTION**

        Two choices: playerHit or playerStand

        If playerHit -> deal one card to player with 3 possible outcomes:
        - Player loses if over 21
        - Player wins if 21
        - Else chose again between playerHit or playerStand


        If playerStand -> deal one card to dealer with 3 possible outcomes:
        - Player loses if over 21
        - Player wins if 21
        - Tie

Finally, from the gameflow I defined my variables:
    - the card deck -> 2 arrays, 1 for values and 1 for suits (Loop into a var).
    - the players hands and points count.
    - the player's bank
    - the player's current bet.

One thing I added later was the gamePlay var to prevent player from clicking on buttons when the player shouldn't.


## /////// HTML ////////

That's the first part I focused on.
From my sketch I had an idea of the layout I wanted the game to have and once completed I did very few iterations.

The things I added after were the following:
    - Player and Dealer points count
    - Bet and Reset buttons

And of course, classes, ids, etc.


/////// CSS ////////

I created the basics of my CSS on the first day of the project along with the HTML.
My main use of CSS was for the grid, the fonts and the overall 70s style I was looking for, making full use of the gradients.
I also used Google Fonts to personalize it a bit more.


/////// JAVASCRIPT ////////

Obviously the main part.
First, I defined all the variables and created my cards deck.
One issue presented itself quickly. How to record the value of A, J, Q and K?
I found online the idea to create a new var, using paresInt for the values and insert conditions if letters matched.

I created functions to respond to a click event on each token, increasing the current bet once clicked.

I later also created a reset button/function to reset your current bet to 0 in case you made a mistake and bet more than you have in the bank.

Then came the first big function: startGame()
It's filled with all the functions necessary to initialise the game.
My first focus was to get the game logic working on the console before thinking about the display or reviewing which variables I might have missed. Hence why you'll find a lot of console.log throughout the code blokcs.

Once I had the basics of startGame, I focused on the 2 next call to actions: HIT or STAND.

And finally, I focused on the checkGameStatus() and finalCheckGameStatus() status which would determine if a player wins or loses.

One of the most challenging part was to get the cards to display. I found a file with pictures of a 52 cards deck online and changed the names to match as follow:
    cardValue + "_of_" + cardSuit

I spent hours trying different formulas only to realise that the first one was correct but that I had made a typo...
Finding a way to find how to flip the first dealer card at a certain point was also a challenge but I managed in the end.
Remove and append children was the best solution.

The last thing I focused on was the alerts. I wanted them to look better and used sweetalert. I had fun on that.
Try to go bankrupt or reach 1,000$ to see...


/////// CONCLUSION ////////

It really helped to get more confident with the skills aquired during the first few weeks.
Last week assignments really helped to have a better understanding of the logics.

The most challenging parts were the planning and the frustration when getting stuck.
Throughout the building of the game, I realised I had not been precise enough on the gameflow and it forced to get back on certain blocks quite oftern.


/////// FUTURE IMPROVEMENTS ////////

Going back on this project in the future, I'd like to add some music when winning but mostly make it more responsive.
The layout is all over the place if the player draws a 5th card.

