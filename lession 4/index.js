let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", ""); 
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i < 2; i++) {
            a = prompt("Введите обязательную статью расходов в этом месяце", "");
            b = prompt("Во сколько это обойдется", "");
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' 
            && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            }else{
                console.log("Вы ввели некорректное значение");
                i -= 1;
            }
        };
    },
    detectDayBudget: function () {
        this.moneyPerDay = Math.round(money / 30);
        alert("Ежедневный бюджет: " + this.moneyPerDay);   
    },
    detectLevel: function () {
        if(this.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        }else if(this.moneyPerDay > 100 && this.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        }else if(this.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Произошла ошибка");
        }
          
    },
    checkSavings: function () {
        if(this.savings == true){
            let save = +prompt("Какова сумма накоплений?", ""),
                precernt = +prompt("Под какой процент?", "");
            
                this.mouthIncome = save/100/12*precernt;
                alert("Доход в месяц с вашего депозита" + appData.mouthIncome);
                }  
    },
    chooseOptExpenses: function () {
        for(let i = 1; i < 3; i++){
            let opt = prompt("Статья необязательных расходов","");
            this.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доп.доход? (Введите через заяптую)", "");
        this.income = items.split(', ');
    }
};
