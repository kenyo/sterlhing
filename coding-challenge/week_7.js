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
