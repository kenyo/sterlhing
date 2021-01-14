const axios = require('axios')
const _ = require('lodash')

const getApi = 'https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=4478f82b74446ad79ca800ce634e'
const postApi = 'https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=4478f82b74446ad79ca800ce634e'

function consecutive(array) {
    var i = 2, d;
    while (i < array.length) {
        d = array[i - 1] - array[i - 2];
        if (Math.abs(d) === 1 && d === array[i] - array[i - 1]) {
            return true;
        }
        i++;
    }
    return false;
}

axios.get(getApi).then(({data}) =>
  data.partners.reduce((acc, cur) => {
    const availDates = cur.availableDates

    // if availableDates contains consecutive dates add here
    if (consecutive(availDates.map(x => new Date(x).getDate() ))) {

      let firstConsecutiveDay
      for (let i = 0; i < availDates.length; i++) {
        if ((new Date(availDates[i + 1]).getDate() - new Date(availDates[i]).getDate()) === 1) {
          firstConsecutiveDay = availDates[i]
          break
        }
      }
      if (acc[cur['country']] === undefined) acc[cur['country']] = {}

      if (acc[cur['country']][firstConsecutiveDay] === undefined) {
        acc[cur['country']][firstConsecutiveDay] = [cur.email]
      } else {
        acc[cur['country']][firstConsecutiveDay].push(cur.email)
      }
      return acc
    } else {
      return acc
    }
  }, {})
).then(countryAvailability => {return countryAvailability})
.then(shapeRequest)
// .then(console.log)

function shapeRequest(avail) {
  const req = {}

  req.countries = Object.entries(avail).map(x => {
    const dateEmails = _.keys(x[1]).map(y => [y, x[1][y]])
    const sortedDateEmails = _.sortBy(dateEmails, o => o[0])


    const foo = countPartners(sortedDateEmails)

    // .reduce((acc, cur) => {
      // return acc} , {}) // return index


    return ({
      name: x[0],
      startDate: avail[x[0]],

      })
  })

  return req


}

// returns dates of event
function countPartners(arr) {
  const hash = {}

  arr.forEach(x =>
    hash[x[0]] = x[1].length
  )

  const sortedDateCounts = Object.entries(hash).sort((x, y) => x[1] - y[1] || new Date(y[0]) - new Date(x[0]))

  return sortedDateCounts.map(x => x[0])[sortedDateCounts.length - 1]

}
