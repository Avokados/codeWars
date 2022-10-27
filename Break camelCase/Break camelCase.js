function solution(string) {
    let result = '';
    for (i = 0; i < string.length; i++) {
      result = result + string[i]
      console.log(result)
      if (i < string.length - 1 && string[i + 1].charCodeAt(0) >= 65 && string[i + 1].charCodeAt(0) <= 90){
        result = result + ' '
      }
    }
  return result
}