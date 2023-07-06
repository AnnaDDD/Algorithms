// Quick sort.
// Выбираем опорный элемент из массива. Как правило, это последний элемент.
// Делим массив на 2 подмассива. Элементы, которые меньше опорного, и элементы, которые больше опорного.
// Рекурсивно применяем сортировку к обоим подмассивам.
// В результате массивы будут делиться до тех пор, пока не останется один элемент, который потом отсортируется.

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let array = [9, 1, 2, 3, 0, 7, 6, 5];
console.log(quickSort(array));