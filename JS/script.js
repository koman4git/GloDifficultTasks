let num = 266219,
    arr = num.toString().split("");

let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= + arr[i];
}
console.log(result);

result **= 3;
console.log(result);

console.log(result.toString().slice(0, 2));
