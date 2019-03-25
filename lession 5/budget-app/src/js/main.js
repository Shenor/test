let start = document.getElementById('start'),
    inputs = document.querySelectorAll('.expenses-item'),
    calculate = document.querySelector('.count-budget-btn'),
    approve = document.querySelector('.expenses-item-btn'),
    optional_fields = document.querySelectorAll('.optionalexpenses-item'),
    income = document.getElementById('income'),
    savings = document.getElementById('savings'),
    percent = document.getElementById('percent'),
    sum = document.getElementById('sum'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let resultTable = document.body.querySelector(".result-table").children,
    resultTableValues = {};
for (let ii = 0; ii < resultTable.length; ii++) {
    let nameClass = resultTable[ii].className,
        nameSplit = nameClass.split("-");
    if (nameSplit[1] == "value") {
        resultTableValues[nameClass] = resultTable[ii];
    }
}
console.log(approve);