function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1,num2) {
    return num1/num2;
};

function operate (operator, num1, num2) {
    if (operator == 'add') {
        return add(num1,num2);
    } else if (operator == 'subtract') {
        return subtract(num1,num2);
    } else if (operator == 'multiply') {
        return multiply(num1,num2);
    } else if (operator == 'divide') {
        return divide(num1,num2);
    }
}

function updateScreen (num) {
    const screen = document.querySelector(".screen");
    const enteredNum = document.createElement("p");
    enteredNum.textContent = num;
    screen.append(enteredNum);

}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", function(e) {
    updateScreen(this.value);
}));