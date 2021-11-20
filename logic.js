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
    if (num2 == '0' && operator == 'divide') {
        updateScreen("you divided by 0 dumbass")
        num1 = null;
        num2 = null;
        operator = null;
        return finalValue = null;
    } else if (operator == 'add') {
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
            updateScreen(num1);
        } else if (num2 != null) {
            num2 += this.value;
            updateScreen(num2);
        } else if (operator != null && num2 == null) {
            num2 = this.value;
            updateScreen(num1);
        } else {
            num1 += this.value;
            updateScreen(num1);
        }
        
        console.log('the value of num1 is: ' + num1);
        console.log('the value of num2 is: ' + num2);
        console.log('the value of operator is: ' + operator)

    }));

    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => button.addEventListener("click", function(e) {
        if (this.id == 'equals') {
            let finalValue = operate (operator, num1, num2);
            console.log('this is the final value: ' + finalValue)
            if (operator == "divide" && num2 == '0'){
                num1 = null;
                num2 = null;
                finalValue = null;
                operator = null;
            } else {
                updateScreen(finalValue.toFixed(2));
                num1 = finalValue;
                num2 = null;
                operator = null;
            }
        } else if (this.id == 'clear') {
            num1 = null;
            num2 = null;
            operator = null;
            let removedNum = document.querySelector(".displayedNum");
            if (removedNum != null) {
                removedNum.remove();
            }
        } else if (operator != null) {
            let finalValue = operate (operator, num1, num2);
            console.log('this is the final value!')
            console.log(finalValue);
            num1 = finalValue;
            num2 = null;
            operator = this.id;
            updateScreen(finalValue.toFixed(2));
        } else {
            operator = this.id; 
        }
    } ));

}


//Adds a click event to all operator buttons on the calculator 
// function operatorButtons(num1, num2, operator) {
//     const operatorButtons = document.querySelectorAll(".operator");
//     operatorButtons.forEach(button => button.addEventListener("click", function(e) {
//         if (this.id = 'equals') {
//             let finalValue = operate (operator, num1, num2);
//             console.log('this is the final value!')
//             console.log(finalValue);
//             num1 = finalValue;
//             num2 = null;
//             operator = null;
//         } else if (this.id == 'clear') {
//             num1 = null;
//             num2 = null;
//             operator = null;
//             finalValue = null;
//             let removedNum = document.querySelector(".displayedNum");
//             if (removedNum != null) {
//                 removedNum.remove();
//             }
//             console.log(num1);
//             console.log(operator);
//         } else {
//             let operator = this.id;
//             console.log(operator);
//             console.log(typeof(operator));
//         }
//     } ))
// }



function runCalculator () {
    let num1 = null;
    let num2 = null;
    let operator = null;

    buttonClick (num1, num2, operator);
}

runCalculator();