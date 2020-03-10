"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main/typescript/main");
describe('Fonction pour l exercice', function () {
    test('reverse a string', function () {
        expect(main_1.reverseString('Let\'s Start')).toBe('tratS s\'teL');
        expect(main_1.reverseString('samuel')).toBe('leumas');
        expect(main_1.reverseString('')).toBe('');
        expect(main_1.reverseString('r')).toBe('r');
    });
    test('is string a palindrome', function () {
        expect(main_1.isPalindrome('kayak')).toBeTruthy();
        expect(main_1.isPalindrome('orange')).toBeFalsy();
        expect(main_1.isPalindrome('')).toBeTruthy();
        expect(main_1.isPalindrome(' ')).toBeTruthy();
    });
    test('reverse integer', function () {
        expect(main_1.reverseInteger(1234)).toBe(4321);
        expect(main_1.reverseInteger(1)).toBe(1);
        expect(main_1.reverseInteger(0)).toBe(0);
        expect(main_1.reverseInteger(Infinity)).toBe(0);
        expect(main_1.reverseInteger(-Infinity)).toBe(0);
        expect(main_1.reverseInteger(-4)).toBe(4);
        expect(main_1.reverseInteger(NaN)).toBe(NaN);
    });
    test('capitalize letters', function () {
        expect(main_1.capitalizeLetters('la super function')).toBe('La Super Function');
        expect(main_1.capitalizeLetters('La Super function')).toBe('La Super Function');
        expect(main_1.capitalizeLetters('Le numero " 8 " est super')).toBe('Le Numero " 8 " Est Super');
        expect(main_1.capitalizeLetters('')).toBe('');
        expect(main_1.capitalizeLetters(' ')).toBe(' ');
    });
    test('max character', function () {
        expect(main_1.maxCharacter("Dimitri")).toBe("i");
        expect(main_1.maxCharacter('egal')).toBe('e');
        expect(main_1.maxCharacter('12 451')).toBe('1');
        expect(main_1.maxCharacter(' ')).toBe(undefined);
        expect(main_1.maxCharacter('')).toBe(undefined);
    });
});
//# sourceMappingURL=test.js.map