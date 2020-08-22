# :spades: BLACKJACK GAME :spades:

## MVPs:
- Use Javascript to pick cards, display them and count
- Create cards using html and css

## Main functions used:
- Random for cards to be picked
- Conditions 
- Event listeners

## Goal:
This game was my first project after 2 weeks at General Assembly. The goal was for me to understand better the basics with HTML, CSS and JavaScript.

## Future Improvements:
- Get the player’s name and use it
- Keep count of games played
- Set intervals so that there is a bit of time between turns, message display, etc.
- Music when you win a certain number of turns.


***

## Thinking process:

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

Finally, from the gameflow I defined my variables and wrote some sudo code that I then transformed:
    - The card deck -> 2 arrays, 1 for values and 1 for suits (Loop into a var).
    - the players hands and points count.
    - the player's bank
    - the player's current bet.


***


## Main Takeaways

Working on this project helped me get more familiar with HTML, CSS and Javascript.
I got to practice my skills but also to better understand the importance of planning and wireframing.

