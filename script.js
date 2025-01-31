document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll("#buttons button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Erreur";
                }
            } else {
                currentInput += value;
            }

            screen.textContent = currentInput || "0";
        });
    });
});
