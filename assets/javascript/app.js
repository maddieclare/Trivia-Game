// Global variables:
    // time
    // wins
    // losses

// Questions array.
    // Each question is an object with options and one correct answer.
    // Boolean attribute to check whether question has already been displayed (default = false).

// Initialise function - loads question (sep. function), resets wins/losses.

// Load question function:
    // Pick random question from array and corresponding answer options (sep. function).
    // Displays question and options to player (options in random order?). 
    // Starts timer (10 second countdown).
    // Sets used attribute in question object to true.

// Time's up function - alert player that they have run out of time, increase loss count by one.

// Pick question function - filter all questions that haven't been asked already and return random from list.

// Player click function - on click event stores which answer player clicked in a variable.

    // Check answer function - evaluates whether player click matches correct answer attribute.

    // If statement:
        // Player loss function - alert player that they have lost, increase loss count by one.
        // Player win function - alert player that they have won, increase win count by one.

// Call initialise function to restart game.