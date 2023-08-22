function playRound(playerSelection, computerSelection) {
    let verdict;
    let winner;
    let loser;
    
    verdict = getVerdict(playerSelection, computerSelection);
    
    if (verdict == 'tie') {
        return `It's a ${verdict}!`;
    } else {
        if (verdict == 'win') {
            winner = playerSelection;
            loser = computerSelection;
        } else {
            winner = computerSelection;
            loser = playerSelection;
        }

        return `You ${verdict}! ${winner} beats ${loser}`;
    } 
}

function getVerdict(player, computer) {
    if (player == computer) {
        return 'tie';
    } else if (player == 'Rock' && computer == 'Paper') {
        return 'lose';
    } else if (player == 'Rock' && computer == 'Scissors') {
        return 'win';
    } else if (player == 'Paper' && computer == 'Scissors') {
        return 'lose';
    } else if (player == 'Paper' && computer == 'Rock') {
        return 'win';
    } else if (player == 'Scissors' && computer == 'Paper') {
        return 'win';
    } else {
        return 'lose';
    }
}

function getComputerChoice() {
    // return a response of either 'Rock', 'Paper' or 'Scissors' based on result of getRandomNum()
    let choice = getRandomNum();

    switch(choice) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

function getRandomNum() {
    // returns a random number of either 1, 2 or 3
    return Math.floor(Math.random() * 3) + 1;
}