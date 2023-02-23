const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});

const calculatorScreen = document.querySelector(".inputText");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevInput = "0";
let currentInput = "0";
let calculationOpertor = "";

const inputNumber = (number) => {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOpertor = operator;
  currentInput = "0";
};

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  calculate();
  updateScreen(currentInput);
});

const calculate = () => {
  let result = 0;
  switch (calculationOpertor) {
    case "+":
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  calculationOpertor = "";
};

const clearBtn = document.querySelector(".clear-all");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentInput);
});
const clearAll = () => {
  prevInput = "0";
  calculationOpertor = "";
  currentInput = "0";
};

const getdecimal = (dot) => {
  if (currentInput === ".") {
    currentInput += dot;
  } else {
    if (currentInput.indexOf("." === -1)) {
      currentInput += dot;
    }
  }
};
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  getdecimal(event.target.value);
  updateScreen(currentInput);
});
