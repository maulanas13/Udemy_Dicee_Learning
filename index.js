const generateDice = (diceID, imgSRC) => {
    return document.getElementById(diceID).src = imgSRC;
}

const selectTitle = (text) => {
    return document.getElementById("title").innerText = text;
}

const diceChange = () => {
    let randomNumber1 = Math.ceil(Math.random()*6);
    let randomNumber2 = Math.ceil(Math.random()*6);

    if (randomNumber1 === 1) generateDice("leftDice", "./images/dice1.png");
    else if (randomNumber1 === 2) generateDice("leftDice", "./images/dice2.png");
    else if (randomNumber1 === 3) generateDice("leftDice", "./images/dice3.png");
    else if (randomNumber1 === 4) generateDice("leftDice", "./images/dice4.png");
    else if (randomNumber1 === 5) generateDice("leftDice", "./images/dice5.png");
    else generateDice("leftDice", "./images/dice6.png");

    if (randomNumber2 === 1) generateDice("rightDice", "./images/dice1.png");
    else if (randomNumber2 === 2) generateDice("rightDice", "./images/dice2.png");
    else if (randomNumber2 === 3) generateDice("rightDice", "./images/dice3.png");
    else if (randomNumber2 === 4) generateDice("rightDice", "./images/dice4.png");
    else if (randomNumber2 === 5) generateDice("rightDice", "./images/dice5.png");
    else generateDice("rightDice", "./images/dice6.png");

    randomNumber1 > randomNumber2 ? selectTitle("Player 1 Wins!") : randomNumber1 < randomNumber2 ? selectTitle("Player 2 Wins!") : selectTitle("Draw!")
}