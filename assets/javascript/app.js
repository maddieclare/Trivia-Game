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
    question: "How many tails does a Manx cat have?",
    correctAnswer: "0",
    options: ["1", "4", "9", "0"],
    alreadyAsked: false
  },
  {
    question: "Which sea creature has three hearts?",
    correctAnswer: "Octopus",
    options: ["Octopus", "Blue whale", "Jellyfish", "Mermaid"],
    alreadyAsked: false
  },
  {
    question: "How many bones (on average) does an adult human have?",
    correctAnswer: "206",
    options: ["540", "111", "1098", "206"],
    alreadyAsked: false
  },
  {
    question: "What is the national flower of Wales?",
    correctAnswer: "Daffodil",
    options: ["Rose", "Daffodil", "Dandelion", "Nettle"],
    alreadyAsked: false
  },
  {
    question: "Which city does the River Lagan flow through?",
    correctAnswer: "Belfast",
    options: ["London", "Prague", "Singapore", "Belfast"],
    alreadyAsked: false
  },
  {
    question:
      "What did A.E. Frick invent in 1887, which are now worn daily by millions of people?",
    correctAnswer: "Contact lenses",
    options: ["Contact lenses", "Sunglasses", "Handbags", "Jeggings"],
    alreadyAsked: false
  },
  {
    question: "How many points does a compass have?",
    correctAnswer: "32",
    options: ["4", "8", "16", "32"],
    alreadyAsked: false
  },
  {
    question: "How many American cents make up a dime?",
    correctAnswer: "10",
    options: ["50", "10", "25", "12"],
    alreadyAsked: false
  },
  {
    question: "How many lines should a limerick have?",
    correctAnswer: "5",
    options: ["7", "2", "5", "10"],
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
      // Sets used attribute in question object to true.
      questionArray[randomQuestionIndex].alreadyAsked = true;
      numberOfQuestionsAsked++;
      return currentQuestion;
    }
  } else {
    return "Game over";
  }
}

// Check answer function - evaluates whether player click matches correct answer attribute.
function playerGuess(clickedAnswer) {
  // If statement:
  if (clickedAnswer === currentQuestion.correctAnswer) {
    playerWins();
    return "Win";
  } else {
    playerLoses();
    return "Lose";
  }
}

// Player win function - alert player that they have won, increase win count by one.
function playerWins() {
  console.log("You win!");
  wins++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}

// Player loss function - alert player that they have lost, increase loss count by one.
function playerLoses() {
  console.log("You lose :(");
  losses++;
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
}
