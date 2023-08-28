// Вызов лифта:
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// лифт C находиться на 7 этаже
// на вход: 1
// отправляем лифт А

function elevator(arr, location) {
    let minDistance = Infinity;
    index = null;
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - location) < minDistance) {
        minDistance = Math.abs(arr[i] - location);
        index = i;
      }
    }
    return index;
}
  
let array = [10, 20, 30, 40];
let location = 17;
const letter = String.fromCodePoint(65 + elevator(array, location));
  
console.log(`Elevator number ${letter} should be sent to the passenger`);
