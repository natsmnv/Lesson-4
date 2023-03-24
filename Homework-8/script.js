// Створити скрипт який повинен виконувати наступне:
// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

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