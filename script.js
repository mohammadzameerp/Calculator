// Append input to the display.
function append(value) {
    const result = document.getElementById("result");
    result.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}
