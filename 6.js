let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 1, 1, 1, 1];

let testArr = arr2;

const testEqualValues = (arr) => {
  let set = new Set(arr);
  if (set.size === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};

testEqualValues(testArr);
