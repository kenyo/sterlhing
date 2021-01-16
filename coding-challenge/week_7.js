function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


function persistence(num) {
  let counter = 0

  let persistentNum = num
  while (persistentNum.toString().length > 1) {
    const strNum = persistentNum.toString()
    persistentNum = strNum.split('').reduce((x, y) => x * y)

    counter++
  }

  return counter
}


function findNextSquare(sq) {
  var sqrt = Math.sqrt(sq)
  if (sq % sqrt !== 0) return - 1
  else {
    return (sqrt + 1)**2
  }
}



function findShort(s){
  const words = s.split(' ')

  let shortestWordLength = 99
  words.forEach(x => {
    if (x.length < shortestWordLength) shortestWordLength = x.length
  })

  return shortestWordLength
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
