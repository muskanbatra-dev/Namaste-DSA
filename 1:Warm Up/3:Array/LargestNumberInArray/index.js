const arr = [2, 3, 4, 56, 0, 9, 2, 1, 3];

const largestElementArray = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

const print = largestElementArray(arr);
console.log(print);
