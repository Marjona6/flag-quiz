"use strict";

// SECTION ONE: Functions and objects definitions go here

// Objects
var questionsArray = [
//Question 1
    {
        questionText: "Let's start off with an easy one. Which country's flag is this?",
        questionImage: "img/uk.png",
        questionChoices: ['England', 'France', 'The United Kingdom', 'Australia'],
        questionCorrectChoice: 2,
        correctDetails: "That's right, that's the flag of the United Kingdom! It includes England, Scotland, Wales, and Northern Ireland.",
		incorrectDetails: "Wrong! That's the flag of the United Kingdom, which includes England, Scotland, Wales, and Northern Ireland."
    },
//Question 2
	{
		questionText: "Let's try another easy one. Which country's flag is this?",
        questionImage: "img/china.png",
        questionChoices: ['India', 'East Timor', 'Germany', 'China'],
        questionCorrectChoice: 3,
        correctDetails: "You got it! That's the flag of the People's Republic of China.",
		incorrectDetails: "Whoops! That's actually the flag of the People's Republic of China."
	},
//Question 3
	{
		questionText: "Let's try another. Which country's flag is this?",
        questionImage: "img/kenya.png",
        questionChoices: ['Barbados', 'Kenya', 'Zimbabwe', 'Malawi'],
        questionCorrectChoice: 1,
        correctDetails: "That's right! That's the flag of the Republic of Kenya, a country in eastern Africa.",
		incorrectDetails: "Sorry, that's not correct. That's the flag of the Republic of Kenya, a country in eastern Africa."
	},
//Question 4
	{
		questionText: "Can you identify this flag?",
        questionImage: "img/iran.png",
        questionChoices: ['Iran', 'Iraq', 'Syria', 'Italy'],
        questionCorrectChoice: 0,
        correctDetails: "Correct! That's the flag of the Islamic Republic of Iran, a country of almost 83 million people.",
		incorrectDetails: "Oops! That's actually the flag of the Islamic Republic of Iran, a country of almost 83 million people."
	},
//Question 5
	{
		questionText: "Can you identify the flag of this Central Asian country?",
        questionImage: "img/turkmenistan.png",
        questionChoices: ['Kazakhstan', 'Kyrgyzstan', 'Turkmenistan', 'Tajikistan'],
        questionCorrectChoice: 2,
        correctDetails: "You got it! That's the flag of Turkmenistan! The designs on the left side of the flag are five traditional patterns used in Turkmen carpets.",
		incorrectDetails: "Sorry, that's not it! It's the flag of Turkmenistan! The designs on the left side of the flag are five traditional patterns used in Turkmen carpets."
	},
//Question 6
	{
		questionText: "Here's a challenge--which country's flag is this?",
        questionImage: "img/vietnam.png",
        questionChoices: ['Morocco', 'Vietnam', 'Kyrgyzstan', 'Macedonia'],
        questionCorrectChoice: 1,
        correctDetails: "Great work! The Socialist Republic of Vietnam is a communist state with 58 provinces and five municipalities.",
		incorrectDetails: "Uh-oh. That's actually the flag of the Socialist Republic of Vietnam, a communist state with 58 provinces and five municipalities."
	},
//Question 7
	{
		questionText: "Maybe something a bit easier? Which country's flag is this?",
        questionImage: "img/france.png",
        questionChoices: ['France', 'Russia', 'Luxembourg'],
        questionCorrectChoice: 0,
        correctDetails: "You got it! That's the flag of the French Republic.",
		incorrectDetails: "Non! That's the flag of the French Republic."
	},
//Question 8
	{
		questionText: "Which country's flag is this, featuring the flag of the United Kingdom as part of its design?",
        questionImage: "img/tuvalu.png",
        questionChoices: ['Australia', 'New Zealand', 'Tuvalu', 'Heard and McDonald Islands'],
        questionCorrectChoice: 2,
        correctDetails: "Excellent! That's the flag of Tuvalu, an archipelago in the Pacific Ocean whose population is less than 10,000 people.",
		incorrectDetails: "Not exactly. That's the flag of Tuvalu, an archipelago in the Pacific Ocean whose population is less than 10,000 people."
	},
//Question 9
	{
		questionText: "Which country has this pretty red flag?",
        questionImage: "img/turkey.png",
        questionChoices: ['Hong Kong', 'Pakistan', 'Tunisia', 'Turkey'],
        questionCorrectChoice: 3,
        correctDetails: "Aferin! (That's Turkish for \"great job\"!) The modern Republic of Turkey was founded in 1923 by Mustafa Kemal Ataturk.",
		incorrectDetails: "Oh no! That's the flag of the Republic of Turkey, founded in 1923 by Mustafa Kemal Ataturk."
	},
//Question 10
	{
		questionText: "Don't worry, there's just one more! Here's an easy one. Which country's flag is this?",
        questionImage: "img/south-korea.png",
        questionChoices: ['South Korea', 'Japan', 'Haiti', 'North Korea'],
        questionCorrectChoice: 0,
        correctDetails: "You got it! That's the flag of the Republic of Korea. The flag incorporates Taoist and Buddhist symbols.",
		incorrectDetails: "Sorry, that's not it! That's actually the flag of the Republic of Korea. The flag incorporates Taoist and Buddhist symbols."
	}
    ];

// initialize a variable to hold the count of questions answered
var totalQuestions = questionsArray.length;

// initialize a variable to hold the count of questions answered
var totalQuestionsAnswered = 0;
// initialize a variable to hold the count of questions answered correctly
var totalQuestionsCorrect = 0;
// initialize a variable to indicate the number of the question we are currently on
var currentQuestion=0;

// Functions

// ******** START PAGE **********

// Step 1: Load the page; show only the first section (#start-page)
function loadPage() {
	// show #start-page section
	// (should default to showing #start-page section)
	// hide #question-page and #end-page sections
	$('#question-page').hide();
	$('#end-page').hide();
	$('#next-question').hide();
	$('#show-results').hide();
	$('#answer-feedback').hide();
	$('#start-page').show();

}

// Step 2: When user clicks "Let's get started!" button, hide #start-page section and show #question-page section
// ... with first question loaded
// NOT USING THIS CURRENTLY
//function goToQuestionPage() {
/*	$("#get-started").click(function() {
	// on click #get-started, toggle #start-page and #question-page
	toggleStartPage();
	toggleQuestionPage();	
	})*/
//}
// *********************************

// ******** QUESTION PAGE **********
// This function displays the next question object in the array questionsArray; a later function...
// ...will call this function in a loop until all questions have been iterated through.
function displayQuestion(currentQuestion) {
	// "Question x of y"
	$(".display-question-number").text("Question " + (currentQuestion +1) + " of " + totalQuestions);
	// Display question text
	$(".display-question-text").text(questionsArray[currentQuestion].questionText);
	// Display question image
	$(".display-question-image").html("<div class='question-flag' style='background-image: url(" + questionsArray[currentQuestion].questionImage +")'></div>");
	// Display question choices
   	// loop to iterate through and display all the possible answers with radio buttons
   	var htmlOutput = "";
   	for (var j=0; j<questionsArray[currentQuestion].questionChoices.length; j++) {
   		htmlOutput += "<li>";
   		htmlOutput += "<input class=\"option\" type=\"radio\" value=\"" + j + "\" name=\"option\">";
   		htmlOutput += questionsArray[currentQuestion].questionChoices[j];
   		htmlOutput += "</li>";
   	}
   	$(".display-question-choices").html(htmlOutput);
}


// Step 3: When user selects a response and clicks "That's my final answer!" button, #answer-feedback displays...
// [To determine if response is correct, compare the user-input value to the value of questionCorrectChoice]
function gradeResponse() {
	// compare userInput to questionsArray[currentQuestion].questionCorrectChoice
	// put the selected value for radio button into a variable
	var userInput = document.querySelector('input[name="option"]:checked').value; // why does this no longer work?

	// compare userInput to value of questionsArray[currentQuestion].questionCorrectChoice
	if (userInput == questionsArray[currentQuestion].questionCorrectChoice) { //computer cannot read questionCorrectChoice? Why?
		return true;
	}
	else {
		return false;
	}
}
// Display answer feedback
function displayAnswerFeedback() {
	if (gradeResponse() == true) {
		$("#answer-feedback").text(questionsArray[currentQuestion].correctDetails);
	}
	else {
		$("#answer-feedback").text(questionsArray[currentQuestion].incorrectDetails);
	}
	$('#answer-feedback').show();
}

// Also, #scorecard section updates, adding 1 to number-attempted and only adding 1 to number-correct if the response
// ... is correct.
function updateScorecard() {
	totalQuestionsAnswered++;
	if (gradeResponse() == true) {
		totalQuestionsCorrect++;
	}
}

function displayScorecard() {
	$("#scorecard").text("Current score: " + totalQuestionsCorrect + " out of " + totalQuestionsAnswered);
}

// This function handles the user clicking the "That's my final answer!" button (answering a question)
// This one is also called in the loop later on
// how to bring in userInput here?
function handleAnswerSubmit() {
	$('#final-answer-button').click(function() {
		// prevent page refresh
		event.preventDefault();

		// hide final-answer-button
		$('#final-answer-button').hide();

		// show next-question-button
		$('#next-question').show();

		// gradeResponse(user input)
		gradeResponse();

		// displayAnswerFeedback(user input)
		displayAnswerFeedback();

		// updateScorecard(user input)
		updateScorecard();

		// display updated scorecard
		displayScorecard();
	})
}
// *********************************

// Step 4: #question-page section populates with next question.

// Process is repeated until last question
// This function calls the functions in the QUESTIONS PAGE section above and iterates through all question
// ... objects in the questionsArray array
function doQuestions() {
		//for (var i=0; i<questionsArray.length; i++) {
			displayQuestion(currentQuestion);
			handleAnswerSubmit();
			//gradeResponse();
			//displayAnswerFeedback(); // not working
			//updateScorecard();
			//currentQuestion++;
			//alert(currentQuestion);
		//}
	// on last question, do not show next-question button
	// instead, show "show my score" button
		
}

// next question button functionality
function loadNextQuestion() {
	currentQuestion++;
		event.preventDefault();
		$('#next-question').hide();
		$('#answer-feedback').hide();
		$('#final-answer-button').show();
	displayQuestion(currentQuestion);
}

// #end-page section displays calculated final-score
function displayFinalScore() {

}

// Step 7: User has the option to click "Play again" button to re-load the page from the beginning
function showPlayAgainButton() {

}

// reloads the page and clears everything out so the user can take the quiz again
function playAgain() {
	// show start-page
	// hide everything else
	// reset all variables to 0

}

// SECTION TWO: Triggers go here

// code below is not working
$(document).ready(function() {
	//when the page loads
	// set currentQuestion to 0
	currentQuestion = 0;
	loadPage();

	//get started button trigger
	$("#get-started").click(function() {
		event.preventDefault();
		$('#start-page').hide();
		$('#end-page').hide();
		$('#question-page').show();
		displayScorecard();
		// displays first question dynamically
		//displayQuestion(currentQuestion);
		doQuestions();
	});

	// next-question button trigger
	$("#next-question").click(function() {
		loadNextQuestion();
	});

	// handle answer submit trigger
	//handleAnswerSubmit();
	

	//show results button trigger
	$("#show-results").click(function() {
		event.preventDefault();
		$('#question-page').hide();
		$('#start-page').hide();
		$('#end-page').show();
	});	

	//play again button trigger
	$("#play-again").click(function() {
		// TO DO: Reset all the variables to 0
		event.preventDefault();
		$('#question-page').hide();
		$('#end-page').hide();
		$('#start-page').show();
	});	
});