import { 
    reverseString, 
    isPalindrome, 
    reverseInteger, 
    capitalizeLetters, 
    maxCharacter,  
    fizzBuzz
}
from '../../main/typescript/main'

describe('Fonction pour l exercice', () => {
    test('reverse a string', () => {
        expect(reverseString('Let\'s Start')).toBe('tratS s\'teL')
        expect(reverseString('samuel')).toBe('leumas')
        expect(reverseString('')).toBe('')
        expect(reverseString('r')).toBe('r')
    })

    test('is string a palindrome', () => {
        expect(isPalindrome('kayak')).toBeTruthy()
        expect(isPalindrome('orange')).toBeFalsy()
        expect(isPalindrome('')).toBeTruthy()
        expect(isPalindrome(' ')).toBeTruthy()
    })

    test('reverse integer', () => {
        expect(reverseInteger(1234)).toBe(4321)
        expect(reverseInteger(1)).toBe(1)
        expect(reverseInteger(0)).toBe(0)
        expect(reverseInteger(Infinity)).toBe(0)
        expect(reverseInteger(-Infinity)).toBe(0)
        expect(reverseInteger(-4)).toBe(4)
        expect(reverseInteger(NaN)).toBe(NaN)
    })

    test('capitalize letters', () => {
        expect(capitalizeLetters('la super function')).toBe('La Super Function')
        expect(capitalizeLetters('La Super function')).toBe('La Super Function')
        expect(capitalizeLetters('Le numero " 8 " est super')).toBe('Le Numero " 8 " Est Super')
        expect(capitalizeLetters('')).toBe('')
        expect(capitalizeLetters(' ')).toBe(' ')
    })

    test('max character', () => {
        expect(maxCharacter('Dimitri')).toBe('i')
        expect(maxCharacter('egal')).toBe('e')
        expect(maxCharacter('12 451')).toBe('1')
        expect(maxCharacter(' ')).toBe(undefined)
        expect(maxCharacter('')).toBe(undefined)
    })

    test('Fizz Buzz', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
        expect(fizzBuzz(33)).toBe('Fizz')
        expect(fizzBuzz(50)).toBe('Buzz')
        expect(fizzBuzz(46)).toBe(46)
        expect(fizzBuzz(0)).toBe('FizzBuzz')
        expect(fizzBuzz(Infinity)).toBe(Infinity)
        expect(fizzBuzz(-50)).toBe('Buzz')
        expect(fizzBuzz(NaN)).toBe(NaN)
    })
});
