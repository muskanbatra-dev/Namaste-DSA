const arr = [3, 2, 1, 5, 3, 4, 8, 3];

function removeElementsArr(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x;
}

const result = removeElementsArr(arr, 3);
console.log(result);
