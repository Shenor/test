var money, time;
monye = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");
article = prompt("Введите обязательную статью расходов в этом месяце", "");
articleMoney = prompt("“Во сколько обойдется?”", "");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        article: articleMoney
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Бюджет на 1 день" + money / 30);