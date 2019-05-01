## Word Guess Game (Challenge)

1. [Live Demo](https://mecastilloc.github.io/WordGuessGame/index.html).

2. The theme for this webapp is 90's dance songs

### How it Works

1. Key events to listen for the letters that the players will type.

2. Display the following on the page:

2.1 A template of te word
   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

2.2 Wins & Loses: (# of times user guessed the word correctly).

2.3 Number of Guesses Remaining: (# of guesses remaining for the user).

2.4 Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

2.5 After the user wins/loses the game should automatically choose another word and make the user play it.

##### Word Guess Game Bonuses

1. Play a sound or song when the user guesses their word correctly.
2. Some stylish CSS rules to make a design that fits the game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This is a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
