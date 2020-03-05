//JEDI NAME FUNCTION

let jediName = (firstName, lastName) => {

    return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`

}

console.log(jediName('Glen', 'Larrabee'));

//BEYOND FUNCTION

let beyond = num => {

    if (num === 0) {
        return 'staying home';
    } if (num === Infinity) {
        return 'and beyond';
    } else if (num > 0) {
        return 'to infinity';
    } else if (num < 0) {
        return 'to negative infinity';
    } else {
        throw 'You must enter a number!';
    }
}

console.log(beyond(Infinity));

//CRACKING THE CODE FUNCTION


function getLetter(word) {
    if (word.charAt(0) === 'a') {
        return word.charAt(1);
    } else if (word.charAt(0) === 'b') {
        return word.charAt(2);
    } else if (word.charAt(0) === 'c') {
        return word.charAt(3);
    } else if (word.charAt(0) === 'd') {
        return word.charAt(4);
    } else {
        return ' ';
    }
}
function decode(code) {
    let answer = '';
    code = code.split(' ');
    for (let i = 0; i < code.length; i++) {
        answer = answer + getLetter(code[i]);
    } return answer;
}
console.log(decode('craft block argon meter bells brown croon droop'));

//DAYS IN A MONTH FUNCTION 

//define leapYear as boolean value
function daysInAMonth(month, leapYear) {
    if (month === 'February' && leapYear) {
        return 28;
    } if (month === 'February' && !leapYear) {
        return 29;
    }

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `There are 31 days in ${month}`
            break;
    }

    switch (month) {
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `There are 30 days in ${month}`
            break;
    }
    throw ('You must enter a month with capitalization!');
}

console.log(daysInAMonth('September', false));

//ROCK PAPER SCISSORS FUNCTION

let choices = ['rock', 'paper', 'scissors'];

//Computer chooses rock, paper or scissor
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(player) {
    const opponent = computerPlay();
    console.log(`Player chooses ${player}, Opponent chooses ${opponent}`)
    if (player == 'rock') {
        if (opponent == 'rock') {
            return 'Tie';
        } else if (opponent == 'scissors') {
            return 'You Win!';
        } else if (opponent == 'paper') {
            return 'You Lose!';
        } else {
            return 'error';
        }
    } else if (player == 'scissors') {
        if (opponent == 'rock') {
            return 'You Lose!';
        } else if (opponent == 'scissors') {
            return 'Tie';
        } else if (opponent == 'paper') {
            return 'You Win!';
        } else {
            return 'error';
        }
    } else if (player == 'paper') {
        if (opponent == 'rock') {
            return 'You Win!';
        } else if (opponent == 'scissors') {
            return 'You Lose!';
        } else if (opponent == 'paper') {
            return 'Tie';
        }
    } else {
        return 'error';
    }
}

console.log(playRound('paper'));



