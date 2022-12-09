result = prompt('Виберіть арифметичну операцію: +, -, *, /');
const number1 = +prompt('Уведіть перше число', '');
const number2 = +prompt('Уведіть друге число', '');
if (isNaN(number1) || isNaN(number2)) {
    alert('НЕ ВІРНО УВЕДЕНИЙ ТИП ДАНИХ');
    console.log('invalid numbers');
}
else switch (result) {
    case '+':
        result = number1 + number2;
        alert(`Сума чисел: ${number1} і ${number2}  складає:
        ${number1} + ${number2} = ${result}`);
        console.log(`Сума чисел: ${number1} і ${number2}  складає:
        ${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        alert(`Різниця між числами: ${number1} і ${number2}  складає:
        ${number1} - ${number2} = ${result}`);
        console.log(`Різниця між числами: ${number1} і ${number2}  складає:
        ${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        alert(`Добуток чисел: ${number1} і ${number2}  складає:
        ${number1} * ${number2} = ${result}`);
        console.log(`Добуток чисел: ${number1} і ${number2}  складає:
        ${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        alert(`Частка чисел: ${number1} і ${number2}  складає:
        ${number1} / ${number2} = ${result}`);
        console.log(`Частка чисел: ${number1} і ${number2}  складає:
        ${number1} / ${number2} = ${result}`);
        break;
    default:
        alert('Не вірно вибрана арифметична операція')
        console.log('Не вірно арифметична вибрана операція')
}
