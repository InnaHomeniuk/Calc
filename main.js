let result = prompt('Виберіть арифметичну операцію: +, -, *, /');
const number1 = +prompt('Уведіть перше число', '');
const number2 = +prompt('Уведіть друге число', '');
let answer ;
if (isNaN(number1) || isNaN(number2)) {
    alert('НЕ ВІРНО УВЕДЕНИЙ ТИП ДАНИХ');
    console.log('invalid numbers');
}
else switch (result) {
    case '+':
        answer = number1 + number2;
        alert(`Сума чисел: ${number1} і ${number2}  складає:
        ${number1} + ${number2} = ${answer}`);
        console.log(`Сума чисел: ${number1} і ${number2}  складає:
        ${number1} + ${number2} = ${answer}`);
        break;
    case '-':
        answer = number1 - number2;
        alert(`Різниця між числами: ${number1} і ${number2}  складає:
        ${number1} - ${number2} = ${answer}`);
        console.log(`Різниця між числами: ${number1} і ${number2}  складає:
        ${number1} - ${number2} = ${answer}`);
        break;
    case '*':
        answer = number1 * number2;
        alert(`Добуток чисел: ${number1} і ${number2}  складає:
        ${number1} * ${number2} = ${answer}`);
        console.log(`Добуток чисел: ${number1} і ${number2}  складає:
        ${number1} * ${number2} = ${answer}`);
        break;
    case '/':
        answer = number1 / number2;
        alert(`Частка чисел: ${number1} і ${number2}  складає:
        ${number1} / ${number2} = ${answer}`);
        console.log(`Частка чисел: ${number1} і ${number2}  складає:
        ${number1} / ${number2} = ${answer}`);
        break;
    default:
        alert('Не вірно вибрана арифметична операція')
        console.log('Не вірно арифметична вибрана операція')
}
