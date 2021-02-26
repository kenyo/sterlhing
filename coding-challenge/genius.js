function unscramble(words, scramble, count) {
  const wordList = words.split(',')

  const wordCount = wordList.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1
    return acc
  }, {})


  return wordCount
}


console.log(unscramble('world,hello', 'rldhello wo', 1))
