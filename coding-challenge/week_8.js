function findOutlier(integers){

  // commented out code below isn't functioning as expected

  // const firstThreeInts = integers.slice(0, 3)
  // const evensOrOdds = firstThreeInts.map(x => x % 2)
  // const moduloSum = evensOrOdds.reduce((x,y) => x + y)

  // let isEven = false
  // if (moduloSum === 0) isEven = true
  // else if (moduloSum === 3) isEven = false
  // else {
  //   let evens = []
  //   let odds = []

  //   firstThreeInts.forEach(x => {
  //     if (x % 2 === 0) evens.push(x)
  //     else odds.push(x)
  //   })

  //   if (evens.length > odds.length) return odds[0]
  //   else return evens[0]

  // }



  var even = integers.filter(a => a % 2 === 0);
  var odd = integers.filter(a  => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}


function solution(input, markers) {
  const lines = input.split('\n')

  const cuts = lines.map(line => {
    let commentStartIndex = Infinity

    markers.forEach(marker => {
      const markerIndex = line.indexOf(marker)
      if (markerIndex < commentStartIndex && markerIndex !== -1) {
        commentStartIndex = markerIndex
      }
    })

    return commentStartIndex
  })

  return lines.map((x, i) => x.slice(0, cuts[i]) + '\n').join(' ').trim()
};



const _ = require('lodash')

function anagrams(word, words) {
  const wordObj = transform(word)

  return words
          .map(transform)
          .map(x => _.isEqual(wordObj, x))
          .map((x, i) => {
            if (x) return words[i]
          }).filter(x => x)
}

function transform(word) {
  return word.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1
    return acc
  }, {})
