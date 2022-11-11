/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
    let word = ''
    let wordR = ''
    let result = ''
    for (let i = 0; i < string.length; i++) {
      word = word + string[i];
      if (string[i + 1] === ' ' || string[i + 1] === undefined) {
        i++
        if (word.length >= 5) {
          for (let a = word.length - 1; a >= 0; a--) {
            wordR = wordR + word[a]
          }
          result = result + wordR + ' '
          wordR = ''
        } else
        result = result + word + ' '
        word = ''
      }
    }
    if (result[result.length - 1] === ' ') {
      result = result.slice(0, -1);
    }
    return result
  }