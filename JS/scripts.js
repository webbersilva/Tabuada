// Seleção de elementos
const operationForm = document.querySelector("#operation-form");
const numberInput = document.querySelector("#number");
const operatorInput = document.querySelector("#operator");
const operandInput = document.querySelector("#operand");

const operationTitle = document.querySelector("#operation-title span");
const operationTable = document.querySelector("#operation-operations");

// Funções
const createTable = (number, operator, operand) => {
    operationTable.innerHTML = "";

    for (let i = 1; i <= operand; i++) {
        let result;
        let operationStr;

        switch (operator) {
            case "multiplication":
                result = number * i;
                operationStr = `${number} x ${i}`;
                break;
            case "division":
                result = (number / i).toFixed(1);
                operationStr = `${number} ÷ ${i}`;
                break;
            case "subtraction":
                result = number - i;
                operationStr = `${number} - ${i}`;
                break;
            case "addition":
                result = number + i;
                operationStr = `${number} + ${i}`;
                break;
        }

        const template = `<div class="row">
                <div class="operation">${operationStr} = </div>
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        operationTable.appendChild(row);
    }

    operationTitle.innerText = number;
};

// Eventos
operationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const number = +numberInput.value;
    const operator = operatorInput.value;
    const operand = +operandInput.value;

    if (!number || !operand) return;

    createTable(number, operator, operand);
});
