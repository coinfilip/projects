function game() {
    let attempts = 1;
    let Cscore = 0;
    let Pscore = 0;

    while (attempts <= 5) {
        const playerSelection = prompt("Choose your weapon", "Rock");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        Cscore = Cscore + getCompScore(playerSelection, computerSelection);
        Pscore = Pscore + getPlayScore(playerSelection, computerSelection);
        
        attempts++;
    }
    console.log(`End of game. Final score: Player ${Pscore} | Computer ${Cscore}`);
}

function getCompScore(p, c) {
    let result = getVerdict(p, c);
    
    if (result == 'lose') {
        return 1;
    } else {
        return 0;
    }
}

function getPlayScore(p, c) {
    let result = getVerdict(p, c);
    
    if (result == 'win') {
        return 1;
    } else {
        return 0;
    }
}

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