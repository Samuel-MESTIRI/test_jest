export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function isPalindrome(str: string) {
    return str === reverseString(str)
}

export function reverseInteger(num: number): number {
    if (num === Infinity || num === -Infinity) return 0
    let strNum: string = num.toString()
    strNum = strNum.split('').reverse().join('')
    return parseInt(strNum)
}

export function capitalizeLetters(str : string): string {
    let words: any = str.split(' ')
    words = words.map((el: string) => el.charAt(0).toUpperCase() + el.slice(1))
    return words.join(' ')
}

export function maxCharacter(str: string) {
    str = str.replace(/\s/g, '')
    const allCharacter: string[] = str.split('');
    const countValue: any = {}
    let maxKey: string = str.split('')[0]
    allCharacter.forEach(el => {
      if(!countValue[el]){
        countValue[el] = 0;
       }
       countValue[el]++;
       if(maxKey === '' || countValue[el] > countValue[maxKey]){
         maxKey = el;
       }
    })
    return maxKey
  }

export function fizzBuzz(nb: number) {
    const f = nb % 3 == 0, b = nb % 5 == 0
    return f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : nb
}