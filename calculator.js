let input = document.querySelector("#input");
let result = document.querySelector(".result");
let historyList = document.querySelector(".history-list");

result.style.fontSize = "2em";

function calculateExpression(expression) {
    try {
        let result = eval(expression);
        return result;
    } catch (error) {
        result.textContent = "Error";
        console.error("Error evaluating expression:", error);
    }
}

function clearInput() {
    input.value = "";
}

document.querySelector(".btn-equal").addEventListener("click", () => {
    let expression = input.value;
    let resultValue = calculateExpression(expression);
    result.textContent = resultValue;
    clearInput();
});
document.querySelector('.AC').addEventListener("click",()=>{
    clearInput();
})

document.querySelectorAll(".operation").forEach(button => {
    button.addEventListener("click", () => {
        input.value += button.textContent;
    });
});
