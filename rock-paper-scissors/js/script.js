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