"user strict";

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let salariesSum = 0;

  for (let salary of salaries) salariesSum += salary;

  return salariesSum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
