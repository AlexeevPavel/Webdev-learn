import {describe} from 'ava-spec';
import CoffeeMachine from '../src/lw6/js/CoffeMachine' 

var coffee = new CoffeeMachine();

describe('GetCoffeeMenu - выводит меню в консоли', t=>{    
    coffee.getCoffeeMenu();
})

describe('SetCash - ввод денег', it=>{
    function makeTest(value, expected) {
        it(`Если к текущему балансу ${value.currentBalance} прибавить ${value.cash} то баланс = ${expected}`, t=> {
          coffee.currentBalance = value.currentBalance;
          coffee.setCash(value.cash);
          let actual = coffee.currentBalance;
          t.is(expected, actual);
        });
      }
      let arranges = [
        { value: { currentBalance: 0, cash: null }, expected: 0 },
        { value: { currentBalance: 5, cash: null }, expected: 5 },
        { value: { currentBalance: 0, cash: undefined }, expected: 0 },
        { value: { currentBalance: 5, cash: undefined }, expected: 5 },
        { value: { currentBalance: 0, cash: -1 }, expected: 0 },        
        { value: { currentBalance: 5, cash: -1 }, expected: 5 },
        { value: { currentBalance: 0, cash: 3 }, expected: 0 },
        { value: { currentBalance: 5, cash: 7 }, expected: 5 },
        { value: { currentBalance: 0, cash: 50 }, expected: 50 },
        { value: { currentBalance: 5, cash: 50 }, expected: 55 },
      ];
      arranges.forEach(function (arrange, i) {
        makeTest(arrange.value, arrange.expected);
      });
})

describe('chooseCoffee - выбор кофе', it=>{
    function makeTest(value, expected) {
        it(`если баланс ${value.currentBalance} и выбраном кофе ${value.currentCoffeeNumber} возвращает ${expected}`, t=> {
          coffee.currentBalance = value.currentBalance;
          let actual = coffee.chooseCoffee(value.currentCoffeeNumber);
          t.is(expected, actual);
        });
      }
      let arranges = [
        { value: { currentBalance: 20, currentCoffeeNumber: null }, expected: false },
        { value: { currentBalance: 20, currentCoffeeNumber: undefined }, expected: false },
        { value: { currentBalance: 0, currentCoffeeNumber: 1 }, expected: false },
        { value: { currentBalance: 5, currentCoffeeNumber: 1 }, expected: false },
        { value: { currentBalance: 100, currentCoffeeNumber: 1 }, expected: true }, ,
        { value: { currentBalance: 78, currentCoffeeNumber: 1 }, expected: true },
        { value: { currentBalance: 50, currentCoffeeNumber: 2 }, expected: true },
        { value: { currentBalance: 30, currentCoffeeNumber: 3 }, expected: true }
      ];
      arranges.forEach(function (arrange, i) {
        makeTest(arrange.value, arrange.expected);
      });
})

describe('getRemainCash - возврат сдачи', it=> {
    function makeTest(value, expected) {
      it(`если ${value.balance} и выбран кофе ${value.coffee} сдача = ${expected}`, t=> {
        coffee.currentBalance = value.balance;
        coffee.currentCoffeeNumber = value.coffee;
        let actual = coffee.getRemainCash();
        t.is(expected, actual);
      });
    }
    let arranges = [
      { value: { balance: 50, coffee: 1 }, expected: 35 },
      { value: { balance: 50, coffee: 2 }, expected: 25 },
      { value: { balance: 100, coffee: 1 }, expected: 85 },
      { value: { balance: 15, coffee: 1 }, expected:0 },
    ];
    arranges.forEach(function (arrange, i) {
      makeTest(arrange.value, arrange.expected);
    });
  }); 