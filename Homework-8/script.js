let choice = prompt(`What do you want to do?`);
let firstNum = Number(prompt(`Enter first number: `));
let secNum = Number(prompt(`Enter second number: `));

if (choice === 'add') {
    alert(`${firstNum} + ${secNum} = ${firstNum + secNum}`);
} else if (choice === 'sub') {
    alert(`${firstNum} - ${secNum} = ${firstNum - secNum}`);
} else if (choice === 'mult') {
    alert(`${firstNum} * ${secNum} = ${firstNum * secNum}`);
} else if (choice === 'div') {
    alert(`${firstNum} / ${secNum} = ${firstNum / secNum}`);
} else {
    alert(`Something went wrong!`);
}