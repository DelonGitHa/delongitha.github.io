const scientificNumberPattern = /^\s*[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?\s*$/;

function validateNumber() {
    const input = document.getElementById("numberInput").value;
    const result = document.getElementById("result");

    if (input.trim() === "") {
        result.textContent = "Please input a number";
        return;	

    } else if (scientificNumberPattern.test(input)) {
        result.textContent = `${input.trim()} is a valid scientific number.`;
        
    } else {
        result.textContent = `${input.trim()} is not a valid scientific number.`;
        
    }
}