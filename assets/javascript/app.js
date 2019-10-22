// Global variables:
let wins = 0;
let losses = 0;
let currentQuestion;
let numberOfQuestionsAsked = 0;

// Questions array.
// Each question is an object with options and one correct answer.
// Boolean attribute to check whether question has already been displayed (default = false).
let questionArray = [
  {
    question: "What is the second most commonly-spoken language in the world?",
    correctAnswer: "Spanish",
    options: ["French", "Chinese", "Spanish", "English"],
    alreadyAsked: false
  },
  {
    question: "Which language has the longest alphabet?",
    correctAnswer: "Cambodian",
    options: ["Russian", "Japanese", "Hawaiian", "Cambodian"],
    alreadyAsked: false
  },
  {
    question: "Approximately how many languages are spoken today?",
    correctAnswer: "7000",
    options: ["7000", "10000", "2500", "800"],
    alreadyAsked: false
  }
];

// Initialise function - loads question (sep. function), resets wins/losses.
// Call initialise function to restart game.
function init() {
  resetQuestionsUsed();

  wins = 0;
  losses = 0;
  numberOfQuestionsAsked = 0;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}

function resetQuestionsUsed() {
  questionArray.forEach(function(question) {
    question.alreadyAsked = false;
  });
}

// Load question function:
// Pick random question from array and corresponding answer options (sep. function).
// Sets used attribute in question object to true.
// Displays question and options to player (options in random order).
// Starts timer (10 second countdown).

//  Generates a random number between two integers.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Load random question function.
// Filter all questions that haven't been asked already and return random from list.
function getNextQuestion() {
  if (numberOfQuestionsAsked !== questionArray.length) {
    let randomQuestionIndex = getRandomNumber(0, questionArray.length - 1);
    currentQuestion = questionArray[randomQuestionIndex];
    if (currentQuestion.alreadyAsked == true) {
      return getNextQuestion();
    } else {
      questionArray[randomQuestionIndex].alreadyAsked = true;
      numberOfQuestionsAsked++;
      return currentQuestion;
    }
  } else {
    return "Game over";
  }
}

// Time's up function - alert player that they have run out of time, increase loss count by one.

// Player click function - on click event stores which answer player clicked in a variable.

function playerGuess(clickedAnswer) {
  if (clickedAnswer === currentQuestion.correctAnswer) {
    playerWins();
    return "Win";
  } else {
    playerLoses();
    return "Lose";
  }
}

function playerWins() {
  console.log("You win!");
  wins++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}

function playerLoses() {
  console.log("You lose :(");
  losses++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}

// Check answer function - evaluates whether player click matches correct answer attribute.
// If statement:
// Player loss function - alert player that they have lost, increase loss count by one.
// Player win function - alert player that they have won, increase win count by one.
