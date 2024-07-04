// printing squareroot of numbers
// using forEach method
let numbers = [4, 9, 16, 25, 36];

function printsquareroot(nums) {
  nums.forEach((num) => {
    let squareroot = Math.sqrt(num);
    console.log(`${num} : ${squareroot}`);
  });
}

printsquareroot(numbers);

// 'for' loop This is where we manually iterate over the array using an index.
let result = [];
function sqrtforloop(nums2) {
  for (let i = 0; i < nums2.length; i++) {
    const squareroot = Math.sqrt(nums2[i]);
    result.push(squareroot);
  }
  return result;
}

let ans = sqrtforloop(numbers);
console.log(ans);
