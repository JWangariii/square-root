// print squareroot of even numbers
let numbers2 = [4, 9, 16, 25, 36, 49];

function printsquareroot(nums) {
  let result = [];
  nums.forEach((num) => {
    if (num % 2 == 0) {
      let squareroot = Math.sqrt(num);
      console.log(squareroot);
      result.push(squareroot);
    }
  });
  return result;
}

printsquareroot(numbers2);
