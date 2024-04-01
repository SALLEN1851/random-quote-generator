/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Create an empty array named quotes
const quotes = [];

// Create five empty objects and add to the quotes array
quotes.push({}, {}, {}, {}, {});

// Add properties to each object
quotes[0].quote = "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.";
quotes[0].source = "Roy T. Bennet";
quotes[0].citation = "Good Reads";
quotes[0].year = 1995;

quotes[1].quote = "There is nothing impossible to they who will try.";
quotes[1].source = "Alexander the Great";

quotes[2].quote = "Start where you are. Use what you have. Do what you can.";
quotes[2].source = "Arthur Ashe";
quotes[2].citation = "Brainy Quote";
quotes[2].year = 1982;

quotes[3].quote = "Quality is not an act, it is a habit.";
quotes[3].source = "Aristotle";

quotes[4].quote = "What is called genius is the abundance of life and health.";
quotes[4].source = "Henry David Thoreau";

// Print quotes array to console to check values
console.log(quotes);


/*
* `getRandomQuote` function
*/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  let randomQuote = quotes[randomNumber];
  console.log("Quote:",randomQuote);

  return randomQuote;
}

getRandomQuote();

/**
* `printQuote` function
*/

function printQuote() {

/**
* 1. Create a variable that calls the getRandomQuote() 
* function
*/

let randomQuote = getRandomQuote();

/**
* 2. Create a variable that initiates your HTML string with 
* the first two <p></p> elements, their classNames, 
* and the quote and source properties, but leave off 
* the second closing `</p>` tag for now
*/

let quoteHTML = '<p class="quote">' + randomQuote.quote + '</p>';
let sourceHTML = '<p class="source">' + randomQuote.source;

/**
* 3. Use an if statement to check if the citation property 
* exists, and if it does, concatenate a <span></span> 
* element, appropriate className, and citation property 
* to the HTML string
*/

if (randomQuote.citation) {
  sourceHTML += '<span class="citation">' + randomQuote.citation + '</span>';
}

/**
*  4. Use an if statement to check if the year property exists, 
* if it does, concatenate a <span></span> element, 
* appropriate className, and year property to the HTML 
* string
*/

if (randomQuote.year) {
  sourceHTML += '<span class="year">' + randomQuote.year + '</span>';

}

/**
* 5. After the two if statements, concatenate the closing </p> 
* tag to the HTML string
*/

sourceHTML += '</p>';

let combinedHTML = quoteHTML + sourceHTML;

/**
* 6. set the innerHTML of the quote-box div to equal the 
* complete HTML string
*/

document.getElementById('quote-box').innerHTML = combinedHTML;

}


/**
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
*/

console.log('test');
document.getElementById('load-quote').addEventListener("click", printQuote, false);