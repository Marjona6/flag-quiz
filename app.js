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
var currentQuestion = 0;

// Functions

// ******** START PAGE **********

// Step 1: Load the page; show only the first section (#start-page)
/*function loadPage() {
	// show #start-page section
	// (should default to showing #start-page section)
	// hide #question-page and #end-page sections
	$('#question-page').hide();
	$('#end-page').hide();
	$('#next-question').hide();
	$('#show-results').hide();
	$('#answer-feedback').hide();
	$('#start-page').show();

}*/
// *********************************

// ******** QUESTION PAGE **********
// This function displays the next question object in the array questionsArray; a later function...
// ...will call this function in a loop until all questions have been iterated through.
function displayQuestion(currentQuestion) {
    // "Question x of y"
    $(".display-question-number").text("Question " + (currentQuestion + 1) + " of " + totalQuestions);
    // Display question text
    $(".display-question-text").text(questionsArray[currentQuestion].questionText);
    // Display question image
    $(".display-question-image").html("<div class='question-flag' style='background-image: url(" + questionsArray[currentQuestion].questionImage + ")'></div>");
    // Display question choices
    // loop to iterate through and display all the possible answers with radio buttons
    var htmlOutput = "";
    for (var j = 0; j < questionsArray[currentQuestion].questionChoices.length; j++) {
        htmlOutput += "<li>";
        htmlOutput += "<input class=\"option\" type=\"radio\" value=\"" + j + "\" name=\"option\">";
        htmlOutput += questionsArray[currentQuestion].questionChoices[j];
        htmlOutput += "</li>";
    }
    $(".display-question-choices").html(htmlOutput);

    // GRADE RESPONSE
    // compare userInput to questionsArray[currentQuestion].questionCorrectChoice
    // put the selected value for radio button into a variable
    /*	var userInput = document.querySelector('input[name="option"]:checked').value;

    	totalQuestionsAnswered++;
    	// compare userInput to value of questionsArray[currentQuestion].questionCorrectChoice
    	if (userInput == questionsArray[currentQuestion].questionCorrectChoice) { //computer cannot read questionCorrectChoice? Why?
    		totalQuestionsCorrect++;
    		$("#answer-feedback").text(questionsArray[currentQuestion].correctDetails);
    	}
    	else {
    		$("#answer-feedback").text(questionsArray[currentQuestion].incorrectDetails);
    	}
    	$('#answer-feedback').show();*/

    // LOAD NEXT QUESTION
    /*	currentQuestion++;
    	event.preventDefault();
    	$('#next-question').hide();
    	$('#answer-feedback').hide();
    	$('#final-answer-button').show();
    	displayQuestion(currentQuestion);*/
}



// *********************************

// Step 4: #question-page section populates with next question.


// SECTION TWO: Triggers go here
$(document).ready(function() {
    //when the page loads
    $('#question-page').hide();
    $('#end-page').hide();
    $('#next-question').hide();
    $('#show-results').hide();
    $('#answer-feedback').hide();
    $('#start-page').show();

    //get started button trigger
    $("#get-started").click(function() {
        event.preventDefault();
        $('#start-page').hide();
        $('#end-page').hide();
        $('#question-page').show();
        $("#scorecard").text("Current score: " + totalQuestionsCorrect + " correct out of " + totalQuestionsAnswered + " answered so far");

        displayQuestion(currentQuestion);
    });

    // final answer button trigger
    $('#final-answer-button').click(function() {
        // prevent page refresh
        event.preventDefault();

        // hide final-answer-button
        $('#final-answer-button').hide();

        // show next-question-button
        $('#next-question').show();

        // gradeResponse(user input)
        // Step 3: When user selects a response and clicks "That's my final answer!" button, #answer-feedback displays...

        // [To determine if response is correct, compare the user-input value to the value of questionCorrectChoice]

        // compare userInput to questionsArray[currentQuestion].questionCorrectChoice
        // put the selected value for radio button into a variable
        //var userInput = document.querySelector('input[name="option"]:checked').value;
		
		var userInput = $('input[name="option"]:checked').val();
        totalQuestionsAnswered++;
        // compare userInput to value of questionsArray[currentQuestion].questionCorrectChoice
        if (userInput == questionsArray[currentQuestion].questionCorrectChoice) { //computer cannot read questionCorrectChoice? Why?
            totalQuestionsCorrect++;
            $("#answer-feedback").text(questionsArray[currentQuestion].correctDetails);
        } else {
            $("#answer-feedback").text(questionsArray[currentQuestion].incorrectDetails);
        }
        $('#answer-feedback').show();



        // display updated scorecard
        $("#scorecard").text("Current score: " + totalQuestionsCorrect + " correct out of " + totalQuestionsAnswered + " answered so far");

         // on last question, handle final question
        if (currentQuestion + 1 == questionsArray.length) {
            $('#next-question').hide();
            $('#answer-feedback').hide();
            $('#final-answer-button').hide();
            $('#show-results').show();
        }
    });


    // next-question button trigger
    $("#next-question").click(function() {
        currentQuestion++;
        event.preventDefault();
        $('#next-question').hide();
        $('#answer-feedback').hide();
        $('#final-answer-button').show();
        displayQuestion(currentQuestion);       
    });

    //show results button trigger
    $("#show-results").click(function() {
        event.preventDefault();
        $('#question-page').hide();
        $('#start-page').hide();
        $('#end-page-final-score').text("Thanks for taking the flag identification quiz! Your final score is " + totalQuestionsCorrect + " out of " + totalQuestionsAnswered + ".");
        $('#end-page').show();
    });

    //play again button trigger
    $("#play-again").click(function() {
        location.reload();
    });
});

// TO DO: Clean up this ugly code
// TO DO: Make all questions "required"
// TO DO: Optimize for mobile
// TO DO: Italicize "non" in French flag question feedback
// TO DO: Center all buttons
// TO DO: Fix FOUC-like stuff when page first loads
// TO DO: Fix button names (all should end in -button)
// TO DO: There is a problem with "play again" functionality--start page loads, first question loads, breaks on first answer
// ... it jumps ahead to the end page and shows a final score of 0 out of 0

// TO DO: Does not include last question in final calculated score.