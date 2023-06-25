// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, 
// который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.


function findElementK(arr1, arr2, k) {
  let newArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (pointer1 === arr1.length) {
      newArray.push(arr2[pointer2]);
      pointer2++;
    } else if (pointer2 === arr2.length) {
      newdArray.push(arr1[pointer1]);
      pointer1++;
    } else if (arr1[pointer1] <= arr2[pointer2]) {
      newArray.push(arr1[pointer1]);
      pointer1++;
    } else {
      newArray.push(arr2[pointer2]);
      pointer2++;
    }
  }

  return newArray[k - 1];
}

let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];
let k = 7;

let result = findElementK(arr1, arr2, k);
console.log(result); 
  
  