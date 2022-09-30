let value = prompt("Введите число");
value = +value;

if (isNaN(value) || typeof value !== "number") {
  console.log("Упс, кажется, вы ошиблись");
} else {
  if ((value ^ 0) !== value) {
    value = Math.round(value);
    console.log("Число округлено до ближайшего целого - " + value);
  }
  if (value % 2 === 0) {
    console.log("Это чётное число");
  } else {
    console.log("Это нечётное число");
  }
}