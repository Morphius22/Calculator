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
    enteredNum.classList.add('displayedNum');
    enteredNum.textContent = num;
    screen.append(enteredNum);

}

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach(button => button.addEventListener("click", function(e) {
    let removedNum = document.querySelector(".displayedNum");
    if (removedNum != null) {
        removedNum.remove();
    }
    updateScreen(this.value);
    let num1 = this.value
    console.log(num1);
    console.log(typeof(num1));
}));