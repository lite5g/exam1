let resultText = "";
document.getElementById("calculateButton").addEventListener("click", function () {
    let firstNumber = parseFloat(prompt("1 soni yozing"));
    let operator = prompt("  tanglang:(+, -, *, /)");
    let secondNumber = parseFloat(prompt("2 soni yozing"));
    let result;
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        
        if (secondNumber === 0) {
            result = "Ошибка: деление на ноль!";
        } else {
            result = firstNumber / secondNumber;
        }
        
    } else {
        result = "operator notogri terilgan";
    }

  
    resultText = `Результат: ${firstNumber} ${operator} ${secondNumber} = ${result}`;

    
    document.getElementById("showAnswerButton").style.display = "inline-block";
});


document.getElementById("showAnswerButton").addEventListener("click", function () {
  
    const resultBox = document.getElementById("resultBox");
    resultBox.textContent = resultText;
    resultBox.style.display = "flex"; 
});