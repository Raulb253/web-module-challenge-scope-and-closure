// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 has a lesser function within it. counter2 is a simple function that pulls the global count variable and increments it by 1.
 * 2. Which of the two uses a closure? How can you tell?
 * count 1 is a closure. You can tell it's the closure because it has the nested function that increments the current value of count. That incremented value gets stored.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points = 0;
  let min = 0;
  let max = 2;
  points += Math.floor(Math.random()*(max - min + 1)) +min;
  return points;
  }
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numOfInn){

let homeScore = 0;
let awayScore = 0;
for (let i =0; i<numOfInn; i++){
  homeScore+=inning();
  awayScore+=inning();
}
let score = {
  "Home": homeScore,
  "Away": awayScore,
};
return score;
}
console.log(finalScore(inning, 9));

// function finalScores(inning, numOfInn){

//   let homeScore = numOfInn * inning;
//   let awayScore = numOfInn * inning;
//   let score = {
//     "Home": homeScore,
//     "Away": awayScore,
//   };
//   return score;
//   }
//   console.log(finalScores(inning(), 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function getInnings(innings){
  return {
    home: innings(), 
    away:innings()
  };
}
function scoreboard(getInnings, innings, numOfInn) {
  let homeTeam = 0;
  let awayTeam = 0;
  let results = [];
  for (let i = 0; i<numOfInn; i++){
    const currentInnings = getInnings(innings); //current innings random score
    homeTeam += currentInnings.home; //targets home object key and adds score
    awayTeam += currentInnings.away; //targets away object key and adds score
    results.push(`${i+1} inning: ${currentInnings.away} - ${currentInnings.home}`);
    
  }//ends statement
  if (homeTeam === awayTeam){
    results.push(`This game will require extra innings`)
  }else{
    results.push(`Final Score ${awayTeam} - ${homeTeam}`);
  }
  return results;
}//ends function
console.log(scoreboard(getInnings, inning, 9))