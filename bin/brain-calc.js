let randomOperatorArray = ['*', '+', '-'];

let randomIndex = Math.floor(Math.random() * (randomOperatorArray.length));

let randomNumber1 = Math.floor(Math.random() * 100) + 1;

let randomNumber2 = Math.floor(Math.random() * 100) + 1;

let randomOperator = randomOperatorArray[randomIndex];



let result = 0;
switch (randomOperator) {
    case '+':
        result = randomNumber1 + randomNumber2;
        break;
    case '-':
        result = randomNumber1 - randomNumber2;
        break;
    case '*':
        result = randomNumber1 * randomNumber2;
        break;
    default:
        result == null;
}
console.log(result)


