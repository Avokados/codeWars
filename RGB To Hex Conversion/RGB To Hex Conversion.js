function toFF(n) {
    if (n < 0) {
      n = 0
    }
    if (n > 255) {
      n = 255
    }
    let a = (n % 16 === 10) ? 'A':
    (n % 16 === 11) ? 'B':
    (n % 16 === 12) ? 'C':
    (n % 16 === 13) ? 'D':
    (n % 16 === 14) ? 'E':
    (n % 16 === 15) ? 'F':
    n % 16;
    let b = (Math.floor(n / 16) === 10) ? 'A':
    (Math.floor(n / 16) === 11) ? 'B':
    (Math.floor(n / 16) === 12) ? 'C':
    (Math.floor(n / 16) === 13) ? 'D':
    (Math.floor(n / 16) === 14) ? 'E':
    (Math.floor(n / 16) === 15) ? 'F':
    Math.floor(n / 16);
    return (`${b}${a}`)
  }
  
  function rgb(r, g, b){
    console.log(toFF(10))
    let rgb = `${toFF(r)}${toFF(g)}${toFF(b)}`
    return rgb
  }