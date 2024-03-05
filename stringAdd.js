/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let newNum1=BigInt(num1);
    let newNum2=BigInt(num2);
    let sum=newNum1+newNum2;
    return sum.toString();

};