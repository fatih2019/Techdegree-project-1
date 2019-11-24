/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * some citations and years are undefined
***/
var quotes = [
  {
    quote: "A hero can be anyone, even a man doing something as simple and reassuring as putting a coat around a little boy's shoulder to let him know that the world han't ended.", 
    source: "Batman", 
    citation: "Dark Knight Rises", 
    year: "2012"
  },
  {
    quote: "Life is locomotion, if you’re not moving you’re not living. But there comes a time when you’ve got to stop running away from things, and you’ve got to start running towards something. You’ve got to forge ahead. Keep moving, even if your path isn’t lit. Trust that you’ll find your way.", 
    source: "Nora Allen", 
    citation: "The Flash Vol 1. #1", 
    year: "New 52"
  },
  {
    quote: "This.This is what I am. This is who I am. Come hell or high water. If I deny it, I deny everything I've ever done, everyhting I've ever fought for.", 
    source: "Green Arrow", 
    citation: "Green Arrow Vol 2. #5"
  },  
  {
    quote: "In brightest day. In blackest night. No evil shall escape my sight. Let those who worship evil's might. Beware my power Green Lantern's light.", 
    source: "Oath of the Green Lantern Corp."
  },  
  {
    quote: "There isn't much justice in this world. Perhaps that's why it is so satisfying to occasionally make some.", source: "Martian Manhunter", 
    citation: "Justice League Task Force Vol 1. #1"
  },
  {
    quote: "Dreams save us. Dreams lift us up and transform us. and on my soul, Iswear until my dream of a world where dignity, honor and justice becomes the reality we all share. I'll never stop fighting. Ever.", 
    source: "Superman", 
    citation: "Action Comics #775", 
    year: "2001"
  },
  {
    quote: "If the prospect of living in a world where trying to respect the basic rights of those around you and valuing each other simply because we exist are such daunting, impossible tasks. Then what sort of world are we left? And what sort of world do you want to live in?", 
    source: "Wonder Woman", 
    citation: "Wonder Woman #170"
  },
  {
    quote: "There's an ancient wisdom I should have heeded long ago, if only I had recognized its truth applies as much to me as to all men. True happiness is found along a middle road. There lies the balance and the harmony with reason and emotion not at war, but hand in hand.", 
    source: "Aquaman", 
    citation: "Aquaman Special Vol 1. #1", 
    year: "1988"
  }
]


/***
 * `getRandomQuote` function
 * This function is getting random number in between 0 to array length.
 * And that number has been used as the array object position.
 * it returns a random quote at the end.
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let newQuote = quotes[randomNumber]; 
  return (newQuote)
}


/***
 * `printQuote` function
 * I used concatenation -Template literals- for the screen output.
 * I had to use 'if' conditions because 'citation' and 'year' were turning as undefined. 
 * if those are not undefined, it added the span tags to the resul concatenation. 
***/
function printQuote () {
  let quote = getRandomQuote()
  let result =
  `
  <p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}`
  
  if (quote.citation !== undefined) {
    result += `<span class="citation"> ${quote.citation} </span>`
  }

  if (quote.year !== undefined) {
    result += `<span class="year"> ${quote.year} </span>`
  }

  result += `</p>`
  
  document.getElementById('quote-box').innerHTML = result;
 
  return
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);