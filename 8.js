let fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"],
]);

for (let el of fruits.entries()) {
  arr = [...el];
  console.log(`Ключ - ${arr[0]}, значение - ${arr[1]}`);
}