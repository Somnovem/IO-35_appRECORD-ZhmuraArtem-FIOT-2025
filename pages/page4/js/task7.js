// Завдання 7: Сортування масиву та побудова нового масиву за умовами
// Частина 1: Побудова нового масиву за умовами ділення
function buildSortedArray(arr) {
  const divisibleBy2 = [];
  const divisibleBy2And3 = [];
  const divisibleBy3 = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
      divisibleBy2And3.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      divisibleBy2.push(arr[i]);
    } else if (arr[i] % 3 === 0) {
      divisibleBy3.push(arr[i]);
    }
  }
  
  return [...divisibleBy2, ...divisibleBy2And3, ...divisibleBy3];
}

// Частина 2: Швидке сортування (Quick Sort)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      middle.push(arr[i]);
    }
  }
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Приклади використання
const inputArray1 = [12, 6, 4, 9, 8, 15, 3, 18, 7];
console.log("Вхідний масив (частина 1):", inputArray1);
const resultArray1 = buildSortedArray(inputArray1);
console.log("Вихідний масив (частина 1):", resultArray1);

const inputArray2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Вхідний масив (частина 2):", inputArray2);
const resultArray2 = quickSort(inputArray2);
console.log("Вихідний масив (частина 2):", resultArray2);

