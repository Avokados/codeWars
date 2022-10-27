function accum(s) {
    let result = '';
    let block = '';
    
    for (i = 0; i < s.length; i++) {
      block = block + (s[i].toUpperCase());
      
      
      for (j = 0; j < i; j++) {
        block += s[i].toLowerCase()
      }
      
      result += block + '-'
      block = ''
      
    };
    result = result.substring(0, result.length - 1);
    return result;
  }