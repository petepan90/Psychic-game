let wins = 0;
let losses = 0;
let guesses = 9;
let guessesmade = 0;

let winssofar = document.querySelector(".wins");
let lossessofar = document.querySelector(".losses");
let guessleft = document.querySelector(".guesses");
let guesssofar = document.querySelector(".guesssofar");

// add whole alphabet
let choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let computerguess = choices[Math.floor(Math.random() * choices.length)]
// console.log(computerguess, 'computerguess');

document.onkeyup = function (event) {
    let computerguess = choices[Math.floor(Math.random() * choices.length)]

    let userguess = event.key;
    for (i = 0; i < choices.length; i++)
        if (choices[i] === userguess) {
            console.log(userguess)
        }


    // console.log('end of game')
    if (userguess === computerguess) {
        console.log('you win')
        // document.getElementsByClassName('.wins').innerhtml = '1';
        wins++;
        gueesses = 9;
        winssofar.innerHTML = wins;
        guessleft.innerHTML = guesses;
    }
    if (userguess !== computerguess) {
        console.log('you lose')
        losses++;
        guesses--;
        guessesmade++;
        lossessofar.innerHTML = losses;
        guesssofar.innerHTML = guessesmade;
        guessleft.innerHTML = guesses;
    }
}
    // if (choices[i] === userguess) {
    // console.log(userguess[i])





    // console log user has won

    // increment wins
    // restart the game
    // reset the variables
    // clear the guesses so far
// }
    // else if (guesses === 0) {
    // log in losses 
    // reset guesses 
    // increment losses
    // clear the guesses so far
// }

// else if (computerguess !== userguess) {
    // put the letter from userguess to get into guesses so far with a comma 
    // decrement guesses and display them 
// }

// }




