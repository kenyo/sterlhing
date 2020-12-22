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

  return uniqueWordCount
}

console.log(foo(str, 2))
