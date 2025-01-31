document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    const liveCalculation = document.getElementById("liveCalculation");
    const buttons = document.querySelectorAll("#buttons button");
    const sciButtons = document.querySelectorAll("#sci-buttons button");
    const toggleScientific = document.getElementById("toggle-scientific");
    const scientificCalc = document.getElementById("scientificCalc");

    let currentInput = "";
    let lastResult = null;

    function updateScreen() {
        liveCalculation.textContent = currentInput || "0";
        try {
            screen.textContent = eval(currentInput) || "0";
        } catch {
            screen.textContent = "Erreur";
        }
        screen.textContent = currentInput || '0';
    }

    toggleScientific.addEventListener("click", () => {
        scientificCalc.classList.toggle("hidden");
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
                lastResult
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    lastResult = currentInput;
                } catch {
                    currentInput = "Erreur";
                }
            } else if (value === "%") {
                
                if (currentInput) {
                    currentInput = (eval(currentInput) / 100).toString();
                } else {
                    currentInput = "0";
                }
            } else {
                currentInput += value;
            }
            updateScreen();
        });
    });

    sciButtons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            try {
                if (value === "sin") {
                    currentInput = Math.sin(eval(currentInput)).toString();
                } else if (value === "cos") {
                    currentInput = Math.cos(eval(currentInput)).toString();
                } else if (value === "tan") {
                    currentInput = Math.tan(eval(currentInput)).toString();
                } else if (value === "log") {
                    currentInput = Math.log10(eval(currentInput)).toString();
                } else if (value === "e") {
                    currentInput += Math.E;
                } else if (value === "π") {
                    currentInput += Math.PI;
                } else if (value === "x²") {
                    currentInput = Math.pow(eval(currentInput), 2).toString();
                } else if (value === "√") {
                    currentInput = Math.sqrt(eval(currentInput)).toString();
                } else if (value === "^") {
                    currentInput += "**";
                } else if (value === "exp") {
                    currentInput = Math.exp(eval(currentInput)).toString();
                } else {
                    currentInput += value;
                }
            } catch {
                currentInput = "Erreur";
            }
    
            updateScreen();
        });
    });
});
