const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Конструктор', function () {
  it(`Выводит меню`, function () {
    assert.doesNotThrow(function () {
      let test = new CoffeeMachine();
      test.getCoffeeMenu();
    });
  });
});

describe('Метод checkValidationCash', function () {
  function makeTest(value, expected) {
    it(`Принял ${value} и должен вернуть ${expected}`, function () {
      let test = new CoffeeMachine();
      let actual = test.checkValidationCash(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: -1, expected: false },
    { value: -2, expected: false },
    { value: -5, expected: false },
    { value: -10, expected: false },
    { value: -50, expected: false },
    { value: -100, expected: false },
    { value: 0, expected: false },
    { value: 0.1, expected: false },
    { value: '1', expected: false },
    { value: 3, expected: false },
    { value: 6, expected: false },
    { value: 15, expected: false },
    { value: 13, expected: false },
    { value: 9, expected: false },
    { value: 1, expected: true },
    { value: 2, expected: true },
    { value: 5, expected: true },
    { value: 10, expected: true },
    { value: 50, expected: true },
    { value: 100, expected: true }
  ];
  arranges.forEach(function (arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод setCash', function () {
  function makeTest(value, expected) {
    it(`Прибавляет ${value.cash} к текущему балансу ${value.currentBalance}, должен выдать: ${expected}`, function () {
      let test = new CoffeeMachine();
      test.currentBalance = value.currentBalance;
      test.setCash(value.cash);
      let actual = test.currentBalance;
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { currentBalance: 0, cash: null }, expected: 0 },
    { value: { currentBalance: 5, cash: null }, expected: 5 },
    { value: { currentBalance: 0, cash: undefined }, expected: 0 },
    { value: { currentBalance: 100, cash: undefined }, expected: 100 },
    { value: { currentBalance: 10, cash: -1 }, expected: 10 },
    { value: { currentBalance: 0, cash: -20 }, expected: 0 },
    { value: { currentBalance: 5, cash: -20 }, expected: 5 },
    { value: { currentBalance: 100, cash: 3 }, expected: 100 },
    { value: { currentBalance: 0, cash: 10 }, expected: 10 },
    { value: { currentBalance: 5, cash: 50 }, expected: 55 },
    { value: { currentBalance: 10, cash: 50 }, expected: 60 },
    { value: { currentBalance: 50, cash: -20 }, expected: 50 },
    { value: { currentBalance: 10, cash: 3 }, expected: 10 },
    { value: { currentBalance: 0, cash: 10 }, expected: 10 },
    { value: { currentBalance: 50, cash: 50 }, expected: 100 },
    { value: { currentBalance: 100, cash: 50 }, expected: 150 },
  ];
  arranges.forEach(function (arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод chooseCoffee', function () {
  function makeTest(value, expected) {
    it(`при текущем балансе ${value.currentBalance} и выбраном номере кофе ${value.currentCoffeeNumber} должен вернуть ${expected}`, function () {
      let testCoffeeMachine = new CoffeeMachine();
      testCoffeeMachine.currentBalance = value.currentBalance;
      let actual = testCoffeeMachine.chooseCoffee(value.currentCoffeeNumber);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { currentBalance: 20, currentCoffeeNumber: null }, expected: false },
    { value: { currentBalance: 20, currentCoffeeNumber: undefined }, expected: false },
    { value: { currentBalance: 0, currentCoffeeNumber: 1 }, expected: false },
    { value: { currentBalance: 5, currentCoffeeNumber: 1 }, expected: false },
    { value: { currentBalance: 10, currentCoffeeNumber: 1 }, expected: false },
    { value: { currentBalance: 0, currentCoffeeNumber: 2 }, expected: false },
    { value: { currentBalance: 5, currentCoffeeNumber: 2 }, expected: false },
    { value: { currentBalance: 10, currentCoffeeNumber: 2 }, expected: false },
    { value: { currentBalance: 0, currentCoffeeNumber: 3 }, expected: false },
    { value: { currentBalance: 5, currentCoffeeNumber: 3 }, expected: false },
    { value: { currentBalance: 10, currentCoffeeNumber: 3 }, expected: false },
    { value: { currentBalance: 100, currentCoffeeNumber: 3 }, expected: true },
    { value: { currentBalance: 78, currentCoffeeNumber: 1 }, expected: true },
    { value: { currentBalance: 50, currentCoffeeNumber: 2 }, expected: true },
    { value: { currentBalance: 30, currentCoffeeNumber: 3 }, expected: true }
  ];
  arranges.forEach(function (arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
}); 

describe('Метод getRemainCash', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffee} сдача должена быть: ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      testCoffeMachine.currentCoffeeNumber = value.coffee;
      let actual = testCoffeMachine.getRemainCash();
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { balance: 33, coffee: 1 }, expected: 13 },
    { value: { balance: 50, coffee: 2 }, expected: 25 },
    { value: { balance: 122, coffee: 3 }, expected: 92 },
    { value: { balance: 100, coffee: 1 }, expected: 80 },
    { value: { balance: 20, coffee: 1 }, expected: 0 },
    { value: { balance: 125, coffee: 3 }, expected: 95 },
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});
