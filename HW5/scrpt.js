// Написать сортировку слиянием.
// Заново написать merge sort.

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.lenght);
  return combine(mergeSort(left), mergeSort(right));
}

function combine(arr1, arr2) {
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
    else arr.push(arr2[j++]);
  }
  while (i < arr1.length) {
    arr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    arr.push(arr2[j++]);
  }
  return arr;
}

let arrN = [4, 5, 2, 8, 1, 3, 7, 6];
console.log(mergeSort(arrN));