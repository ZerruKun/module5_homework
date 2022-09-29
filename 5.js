let array = [1,2,3,4,5,6,7];
console.log("Длинная массива равна " + array.length);
array.forEach( (el, i, arr) => console.log(arr[i] + " элемент: " + el));