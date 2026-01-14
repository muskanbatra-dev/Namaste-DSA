let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

function removeDuplicatesArr(arr) {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left;
}

const result = removeDuplicatesArr(arr);
console.log(result);
const newArr = arr.slice(arr,result)
console.log(newArr)