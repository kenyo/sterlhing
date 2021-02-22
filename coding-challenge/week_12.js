function countSwaps(a) {
    let sortCount = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                sortCount += 1;
            }
        }

    }

    console.log('Array is sorted in', sortCount, 'swaps.');
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[a.length - 1]);

}



const memo = {}

function fibonacci(n) {
  if (n <= 1) {
    return n
  } else if (memo[n] !== undefined) {
    return memo[n]
  } else {
    const computedValue = fibonacci(n - 1) + fibonacci(n - 2)
    memo[n] = computedValue

    return computedValue
  }



}




function rotLeft(a, d) {
  const rotatedArray = new Array(a.length)

  a.forEach((x, i) => {
    const newIndex = i - d
    rotatedArray.splice(newIndex, 1, x)
  })

  return rotatedArray
}





function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}



function tribonacci(signature,n){
  if (n === 0) return []
  if (n === 1) return [signature[0]]

  const numbers = signature

  for (let x = 2; x < n - 1; x++) {
    numbers.push(numbers[x] + numbers[x - 1] + numbers[x - 2])
  }

  return numbers
}
