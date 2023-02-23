const operator = ["+", "-", "*", "/"];
let input1 = document.getElementById("value1");
let input2 = document.getElementById("value2");
let resultInput = document.getElementById("result");
let opr = document.getElementById("operator");

function playGame() {
  let number1 = Math.floor(Math.random() * 10);
  let number2 = Math.floor(Math.random() * 10);
  input1.value = number1;
  input2.value = number2;
  opr.innerHTML = operator[Math.floor(Math.random() * operator.length)];
  resultInput.value ="";
}

const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
  let numOneInput = input1.value;
  let numTwoInput = input2.value;
  let span = opr.innerHTML;
  let result;
  switch (span) {
    case "+":
      result = Number(numOneInput) + Number(numTwoInput);
      break;
    case "-":
      result = Number(numOneInput) - Number(numTwoInput);
      break;
    case "*":
      result = Number(numOneInput) * Number(numTwoInput);
      break;
    case "/":
      result = Number(numOneInput) / Number(numTwoInput);
      break;
  }

  if (resultInput.value == "") {
    Toastify({
      text: "Please enter a answer !",
      offset: {
        x: 80,
        y: 40,
      },
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #ffa500, #ff0000)",
      },
    }).showToast();
  } else if (resultInput.value == result) {
    Toastify({
      text: "TRUE",
      offset: {
        x: 80,
        y: 50,
      },
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #112870,#114d70)",
        width: "150px",
      },
    }).showToast();
  } else {
    Toastify({
      text: "FALSE",
      offset: {
        x: 80,
        y: 50,
      },
      duration: 3000,
      style: {
        background: "linear-gradient(to right,#ff2307, #ffbc07)",
        width: "150px",
      },
    }).showToast();
  }
});

function resetGame() {
  input1.value = "";
  input2.value = "";
  resultInput.value = "";
}
