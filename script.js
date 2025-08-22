function toggleIngredients() {
    document.querySelector(".ingredients").classList.toggle("hidden");
}

function toggleSteps() {
    document.querySelector(".steps").classList.toggle("hidden");
}

let stepIndex = 0;
const steps = document.querySelectorAll(".steps li");
const progressFill = document.querySelector(".progress-fill");

document.getElementById("startBtn").addEventListener("click", () => {
    stepIndex = 0;
    steps.forEach(s => s.classList.remove("highlight"));
    steps[stepIndex].classList.add("highlight");
    document.getElementById("nextBtn").disabled = false;
    progressFill.style.width = `${(stepIndex + 1) / steps.length * 100}%`;
});

document.getElementById("nextBtn").addEventListener("click", () => {
    steps[stepIndex].classList.remove("highlight");
    stepIndex++;
    if (stepIndex < steps.length) {
        steps[stepIndex].classList.add("highlight");
        progressFill.style.width = `${(stepIndex + 1) / steps.length * 100}%`;
    } else {
        // When last step is done → go to "Enjoy" page
        window.location.href = "enjoy.html";
    }
});
