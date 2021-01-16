const _ = require('lodash')
const noMatch = 'NO MATCH'

function matchPattern(patterns, paths) {
  return paths
    .map(path => findBestPattern(patterns, path))
    // .map(x => !_.isEqual(x, noMatch) ? x.join(',') : x)

}

function findBestPattern(patterns, path) {
  const partsOfPath = path.split('/')
  const splitPatterns = patterns.map(x => x.split(','))
  console.log(splitPatterns)
  // partsOfPath.
  return path
}



(function main() {
  process.stdin.setEncoding('utf8')

  process.stdin.on('readable', () => {
    const input = process.stdin.read()
    if (input !== null) {
      // filter out empty strings reading from stdin
      const inputList = input.split('\n').filter(x => !_.isEmpty(x))
      const pathsStartIndex = parseInt(inputList[0]) + 2
      const patterns = inputList.slice(1, pathsStartIndex - 1)
      const paths = inputList.slice(pathsStartIndex).map(x => {
        // trim leading slash
        if (_.isEqual(x[0], '/')) return x.slice(1)
        // trim trailing slash
        else if (_.isEqual(_.last(x), '/')) return x.slice(0, -1)
        else return x
      })

      const output = matchPattern(patterns, paths)
      output.forEach(x => console.log(x))
    }
  })

})()
