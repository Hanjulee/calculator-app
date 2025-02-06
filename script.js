let display = document.getElementById("display");

// Append characters (digits/operators) to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;
    
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendCharacter(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

function appendCharacter(char) {
    let lastChar = display.value.slice(-1);
    if ("+-*/.".includes(lastChar) && "+-*/.".includes(char)) {
        return;
    }
    display.value += char;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
