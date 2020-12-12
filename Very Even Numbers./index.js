function isVeryEvenNumber(n) {
    const sumOfArr = arr => arr.reduce((i, v) => i + v, 0)
    if(n < 10) return n % 2 === 0
    
    // Array.from(String(n), Number)
    const arr = n.toString().split('').map(a=> Number(a))
    return isVeryEvenNumber(sumOfArr(arr))
  }

    /**
   * 
   * isVeryEvenNumber(8), true
   * 
   * isVeryEvenNumber(581), false
   * 
   * isVeryEvenNumber(1082000867370), true
   * 
   */
