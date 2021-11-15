// adds together two numbers
function add (num1, num2) {
    return Number(num1) + Number(num2);
};

// substracts two numbers
function subtract (num1, num2) {
    return Number(num1) - Number(num2);
};

// multiplies together two numbers
function multiply (num1, num2) {
    return Number(num1) * Number(num2);
};

// divides two numbers
function divide (num1,num2) {
    return Number(num1)/Number(num2);
};

//performs the calculation specified by an operator. 
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

//Removes the last value on the calculator screen and updates it with the current value of the calculator
function updateScreen (num) {
    let removedNum = document.querySelector(".displayedNum");
    if (removedNum != null) {
        removedNum.remove();
    }
        
    const screen = document.querySelector(".screen");
    const enteredNum = document.createElement("p");
    enteredNum.classList.add('displayedNum');
    enteredNum.textContent = num;
    screen.append(enteredNum);
    
}

//Adds a click event to all numbers on the calculator
//the num buttons and operator buns basically need to live in the same function so they can update and refer to each other values.
function buttonClick (num1, num2, operator) {
    const numButtons = document.querySelectorAll(".numButton");
    numButtons.forEach(button => button.addEventListener("click", function(e) {
        if (num1 == null) {
            num1 = this.value;
        } else if (num2 != null) {
            num2 += this.value;
        } else if (operator != null && num2 == null) {
            num2 = this.value;
        } else {
            num1 += this.value;
        }
        updateScreen(num1);
        console.log(num1);
        console.log(typeof(num1));
        console.log(num2);
        console.log(typeof(num2));
    }));

    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => button.addEventListener("click", function(e) {
        if (this.id == 'equals') {
            let finalValue = operate (operator, num1, num2);
            console.log('this is the final value!')
            console.log(finalValue);
            num1 = null;
            num2 = null;
            operator = null;
        } else if (this.id == 'clear') {
            num1 = null;
            num2 = null;
            operator = null;
            let removedNum = document.querySelector(".displayedNum");
            if (removedNum != null) {
                removedNum.remove();
            }
            console.log(num1);
            console.log(operator);
        } else {
            operator = this.id;
            console.log(operator);
            console.log(typeof(operator));
        }
    } ));

}


//Adds a click event to all operator buttons on the calculator 
function operatorButtons(num1, num2, operator) {
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => button.addEventListener("click", function(e) {
        if (this.id = 'equals') {
            let finalValue = operate (operator, num1, num2);
            console.log('this is the final value!')
            console.log(finalValue);
        } else if (this.id == 'clear') {
            num1 = 0;
            num2 = 0;
            operator = 0;
            let removedNum = document.querySelector(".displayedNum");
            if (removedNum != null) {
                removedNum.remove();
            }
            console.log(num1);
            console.log(operator);
        } else {
            let operator = this.id;
            console.log(operator);
            console.log(typeof(operator));
        }
    } ))
}



function runCalculator () {
    let num1 = null;
    let num2 = null;
    let operator = null;

    buttonClick (num1, num2, operator);
}

runCalculator();