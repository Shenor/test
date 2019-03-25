let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('.budget-value')[0],
    daybudgetValue = document.getElementsByClassName('.daybudget-value')[0],
    levelValue = document.getElementsByClassName('.level-value')[0],
    expensesvalue = document.getElementsByClassName('.expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('.optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('.income-value')[0],
    monthsavingsValue = document.getElementsByClassName('.monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('.yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionlExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optional_fields = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('.choose-income'),
    chekSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'), 
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", "");   
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.textContent = new Date(Date.parse(time)).getFullYear();
    month.textContent = new Date(Date.parse(time)).getMonth() + 1;
    day.textContent = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i=0; i < expensesItem.length; i++) {
        a = expensesItem[i].value;
        b = expensesItem[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' 
        && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        }else{
            console.log("Вы ввели некорректное значение");
            i -= 1;
        }
    }
    expensesvalue.textContent = sum;
});

optionlExpensesBtn.addEventListener('click', function(){
    for(let i = 1; i < optional_fields.length; i++){
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent = appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = Math.round(money / 30);
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if(this.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достатка";
        }else if(this.moneyPerDay > 100 && this.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень достатка";
        }else if(this.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень достатка";
        }else{
            levelValue.textContent = "Произошла ошибка";
        }
    }else{
        daybudgetValue.textContent = "Произошла ошибка!";
    } 
});

income.addEventListener('input', function(){
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

chekSavings.addEventListener('click', function(){
if(appData.savings == true){
appData.savings == false;
}else{
    appData.savings == true;
}
});

sumValue.addEventListener('input', function(){
    if(appData.savings = true){
       let sum = +sumValue.value;
            precent = +percentValue.value;

            appData.mouthIncome = sum/100/12*precernt;
            appData.yearIncome = sum/100*precernt;

            monthsavingsValue.textContent = appData.mouthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.savings = true){
        let sum = +sumValue.value;
        precent = +percentValue.value;

        appData.mouthIncome = sum/100/12*precernt;
        appData.yearIncome = sum/100*precernt;

        monthsavingsValue.textContent = appData.mouthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});