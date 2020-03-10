"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(str) {
    return str.split('').reverse().join('');
}
exports.reverseString = reverseString;
function isPalindrome(str) {
    return str === reverseString(str);
}
exports.isPalindrome = isPalindrome;
function reverseInteger(num) {
    if (num === Infinity || num === -Infinity)
        return 0;
    var strNum = num.toString();
    strNum = strNum.split('').reverse().join('');
    return parseInt(strNum);
}
exports.reverseInteger = reverseInteger;
function capitalizeLetters(str) {
    var words = str.split(' ');
    words = words.map(function (el) { return el.charAt(0).toUpperCase() + el.slice(1); });
    return words.join(' ');
}
exports.capitalizeLetters = capitalizeLetters;
function maxCharacter(str) {
    str = str.replace(/\s/g, '');
    var allCharacter = str.split('');
    var countValue = {};
    var maxKey = str.split('')[0];
    allCharacter.forEach(function (el) {
        if (!countValue[el]) {
            countValue[el] = 0;
        }
        countValue[el]++;
        if (maxKey === '' || countValue[el] > countValue[maxKey]) {
            maxKey = el;
        }
    });
    return maxKey;
}
exports.maxCharacter = maxCharacter;
//# sourceMappingURL=main.js.map