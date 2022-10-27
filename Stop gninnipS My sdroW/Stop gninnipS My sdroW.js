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