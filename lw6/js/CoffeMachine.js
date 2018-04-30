class CoffeeMachine {
  constructor() {
    this.currentBalance = 0;
    this.coffeeMenu = [
      {id: 1, name: 'Макиато', price: 10 },                
      {id: 2, name: 'Капучино', price: 15},
      {id: 3, name: 'Американо', price: 25}];
      this.currentCoffeeNumber = 0;
    }

  setCash(cash) {
    if (this.checkValidationCash(cash)) {
      this.currentBalance += cash;
      console.log(`Ваш баланс: ${this.currentBalance} руб.`)
      return true;
    }
    console.log(`Ошибка! Внесите 1,2,5,10,50 или 100 руб.!`)
    return false;
  }

  checkValidationCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 ||
      cash === 10 || cash === 50 || cash === 100;
  }

  getCoffeeMenu() {
    this.coffeeMenu.forEach(function(coffee, i) {
      console.log(`${coffee.id} - ${coffee.name} ${coffee.price}  руб`);
    });
  }

  chooseCoffee(coffeeNumber) {
    if (typeof coffeeNumber === 'number') {
      if (this.checkCoffeeNumber(coffeeNumber)) {
        if (this.currentBalance >= this.coffeeMenu[coffeeNumber - 1].price){
          console.log('Ваш выбор: ' + coffeeNumber);
          this.currentCoffeeNumber = coffeeNumber - 1;
          return true;
        }
        console.log('Ошибка! Недостаточно средств!');
        return false;
      }
      console.log('Ошибка! Вы ввели неверное значение!');
      return false;
    }
    return false;
    console.log('Ошибка! Вы ввели не число!');
  }

  checkCoffeeNumber(number) {
    return (this.coffeeMenu.find(item => item.id === number) !== undefined) ? true : false;
  }

  getRemainCash() {
    if (typeof this.currentCoffeeNumber === 'number' && typeof this.currentBalance === 'number'){
      var remain = this.currentBalance - this.coffeeMenu[this.currentCoffeeNumber].price;
      console.log('Остаток баланса: ' + remain);
      return remain;
    }
    return false;
  }
}