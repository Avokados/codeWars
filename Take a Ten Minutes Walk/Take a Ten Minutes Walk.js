function isValidWalk(walk) {
    let side = {
      n : 1,
      s : -1,
      w : 2,
      e : -2,
    }
    let isItZero = 0;
    for (let i = 0; i < walk.length; i++) {
      isItZero = isItZero + side[`${walk[i]}`]
    }
    return (isItZero == 0 && walk.length == 10)
  }