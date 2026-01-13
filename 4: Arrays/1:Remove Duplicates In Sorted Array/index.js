let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

function removeDuplicatesSortedArr(arr) {
  let x = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }

  return x + 1;
}

const length = removeDuplicatesSortedArr(arr);
console.log(length);
console.log(arr.slice(0, length));
