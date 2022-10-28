function solution(str){
    let result = []
    
    for(let i = 0; i < str.length; i+=2) {
      if (str[i] === undefined) {
        result.push('')
        break
      }
      if (str[i + 1] === undefined) {
        result.push(str[i] + '_')
        break
      } else
        result.push(str[i] + str[i + 1])
      
    }
   
   return result
   
 }