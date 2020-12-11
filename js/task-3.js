"user strict";

const findBestEmployee = function (employees) {
  const names = Object.keys(employees);

  let bestEmployee = names[0];
  //   console.log(bestEmployee);
  for (let name of names) {
    if (employees[name] > employees[bestEmployee]) {
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
