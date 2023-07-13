let screen = document.getElementById("screen");
let expression = "";

function addToScreen(value) {
  expression += value;
  screen.value = expression;
}

function clearScreen() {
  expression = "";
  screen.value = "";
}

function calculate() {
   try {
    expression = eval(expression);
    screen.value = expression;
  } catch (error) {
    screen.value = "Error";
  }
}
