function digPow(n, p){
    let k = 1
    let arr = []
    let a = n.toString()
    let integer = 0
    for (let i = 0; i < a.length; i++) {
      arr.push(parseInt(a[i]) ** p)
      p++
    }
    for (let i = 0; i < arr.length; i++) {
      integer = integer + arr[i]
    }
    if (integer % n === 0) {
      return integer / n
    } else 
      return -1
    
  }