var _ = require('lodash')

var str = "Two vast and trunkless legs of stone Stand in the desert. Near them, on the sand, Half sunk, a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read Which yet survive, stamped on these lifeless things, The hand that mocked them and the heart that fed: And on the pedestal these words appear: 'My name is Ozymandias, king of kings: Look on my works, ye Mighty, and despair!' Nothing beside remains. Round the decay Of that colossal wreck, boundless and bare The lone and level sands stretch far away."

/*
    Instructions:
    Please implement the top_k_words function to satisfy the following requirements:

      1) Given a string and integer return the top k words by frequency.
         Examples:
           String[] top_k_words("It's a dog eat dog world", 1) => ["dog"]
           String[] top_k_words("Hello New York, New York", 2) => ["new", "york"]
           String[] top_k_words("A poem about Mary. Mary had a little lamb, its fleece was white as snow; And everywhere that Mary went the lamb was sure to go.", 4) => ["mary", "lamb", "was", "a"]
      2) Treat uppercase and lowercase words as the same word.
      3) Remove punctuation.
      4) Once you have a working solution sorting top k words by frequency please
         apply an alphabetical secondary sort.
         Example:
           In the above example, ["mary", "lamb", "was", "a"] is correctly sorted by
           frequency.
             [["mary", 3], ["lamb", 2], ["was",2], ["a", 2]]
           Sorting by frequency, then alphabetical should yield
             [["mary", 3], ["a", 2], ["lamb",2], ["was", 2]]
           The final result should look like this:
             ["mary", "a", "lamb", "was"]
      5) As a caller of your function, I decide to call it with `top_k_words(str, -2)`. Calling `top_k_words` with `-2` does not yield any valid output. Modify your solution to handle this input.

    Feel free to use Google to check Javascript syntax and functionality

    You have 60 minutes to complete the problem  Please email arawding@handy.com once you have completed the problem.
*/

function foo(str, n) {
  // strip out punctuation and store unique lowercase words in array
  const uniqueWords = str.replace(/[.,\/#!$%\^&\*;:{}=\-_'`~()]/g, '')
    .toLowerCase()
    .split(' ')

  const uniqueWordCount = uniqueWords.reduce((acc = {}, word) => {
    acc[word] = acc[word] + 1 || 1
    return acc
  }, {})

  return Object.keys(uniqueWordCount).map(x => [x, uniqueWordCount[x]])
    .sort((x, y) => y[1] - x[1])
    .slice(0, n)
}

// console.log(foo(str, 2))


// You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.

// Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

// Example

// For

// a = [[3, 3, 4, 2],
//      [4, 4],
//      [4, 0, 3, 3],
//      [2, 3],
//      [3, 3, 3]]
// the output should be

// meanGroups(a) = [[0, 4],
//                  [1],
//                  [2, 3]]
// mean(a[0]) = (3 + 3 + 4 + 2) / 4 = 3;
// mean(a[1]) = (4 + 4) / 2 = 4;
// mean(a[2]) = (4 + 0 + 3 + 3) / 4 = 2.5;
// mean(a[3]) = (2 + 3) / 2 = 2.5;
// mean(a[4]) = (3 + 3 + 3) / 3 = 3.
// There are three groups of means: those with mean 2.5, 3, and 4. And they form the following groups:

// Arrays with indices 0 and 4 form a group with mean 3;
// Array with index 1 forms a group with mean 4;
// Arrays with indices 2 and 3 form a group with mean 2.5.
// Note that neither

// meanGroups(a) = [[0, 4],
//                  [2, 3],
//                  [1]]
// nor

// meanGroups(a) = [[0, 4],
//                  [1],
//                  [3, 2]]
// will be considered as a correct answer:

// In the first case, the minimal element in the array at index 2 is 1, and it is less then the minimal element in the array at index 1, which is 2.
// In the second case, the array at index 2 is not sorted in ascending order.
// For

// a = [[-5, 2, 3],
//      [0, 0],
//      [0],
//      [-100, 100]]
// the output should be

// meanGroups(a) = [[0, 1, 2, 3]]
// The mean values of all of the arrays are 0, so all of them are in the same group.

 const a = [[3, 3, 4, 2],
     [4, 4],
     [4, 0, 3, 3],
     [2, 3],
     [3, 3, 3]]

// meanGroups(a) = [[0, 4],
//                  [1],
//                  [2, 3]]
console.log(meanGroups(a))

function meanGroups(a) {
  const means = a.map(x => (x.reduce((y, z) => y + z)) / x.length)
  const group = means.reduce((acc, avg, i) => {
    if (acc[avg] == undefined) {
      acc[avg] = [i]
    } else {
      acc[avg].push(i)
    }
    return acc
  }, {})

  return Object.values(group)
}
