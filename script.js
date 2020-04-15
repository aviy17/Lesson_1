let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    typeof b != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    alert("Введите текст до 50 символов");
  }
}

/*
	let i = 2;
	while(i){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

		if (
			typeof a === "string" &&
			typeof b != null &&
			typeof b != null &&
			a != "" &&
			b != "" &&
			a.length < 50
		) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			alert("Введите текст до 50 символов");
		}

		i--;
	}
*/

/*
	let i = 0;
	do{
		let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    	b = prompt("Во сколько обойдется?", "");

		if (
			typeof a === "string" &&
			typeof b != null &&
			typeof b != null &&
			a != "" &&
			b != "" &&
			a.length < 50
		) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			alert("Введите текст до 50 символов");
		}
		i++;
	}while(i < 2)
*/

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось.
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки.
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет составляет:" + appData.moneyPerDay);

if (appData.moneyPerDay > 0) {
  switch (appData.moneyPerDay) {
    case 100:
      console.log("Минималный уровень достатка");
      break;
    case 2000:
      console.log("Средний уровень достатка");
      break;
    default:
      console.log("Высокий уровень достатка");
  }
} else {
  console.log("Что-то пошло не так!");
}
