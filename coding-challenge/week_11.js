function maxSequence(arr){
  let currentSum = 0
  let maxSum = 0

  if(arr.length === 0){
      return 0
  }

  arr.forEach(a => {
    currentSum = Math.max(a, currentSum + a)
    maxSum = Math.max(maxSum, currentSum)
  })
  return maxSum
}


var maxRedigit = function(num) {
  if (num <= 0) {
    return null
  }

  const digits = num.toString().split('')

  digits.sort((a, b) => b - a)

  const returnValue = parseInt(digits.join(''))

  if (returnValue === num) return null
  else return returnValue
};




