// Function to perform the calculation
function calculate() {
  // Get values from input fields
  const leftOperand = document.getElementById("leftOperand").value;
  const rightOperand = document.getElementById("rightOperand").value;
  const operator = document.getElementById("operator").value;

  // Check if inputs are positive integers
  if (leftOperand < 0 || rightOperand < 0) {
    alert("Error :(");
    return;
  }

  // Parse operands as integers
  const num1 = parseInt(leftOperand);
  const num2 = parseInt(rightOperand);

  // Check for division or modulo by zero
  if ((operator === "/" || operator === "%") && num2 === 0) {
    alert("It’s over 9000!");
    return;
  }

  let result;

  // Perform calculation based on the operator
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid operator";
  }

  // Display result in alert
  alert("Result: " + result);
  
  // Log result in console
  console.log("Calculation result: " + result);
}

// Add event listener to the form submission
document.getElementById("calculatorForm").addEventListener("submit", function(event) {
  event.preventDefault();
  calculate();
});

// Show alert every 30 seconds
setInterval(() => {
  alert("Please, use me...");
}, 30000);