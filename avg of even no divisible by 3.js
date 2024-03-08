/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sumOfAddedNumbers = 0; 
    let count = 0;
     for (let num of nums) {
         if (num % 2 === 0 && num % 3 === 0) { 
             sumOfAddedNumbers += num; 
             count++;
         }
     }
     if(count===0){
         return 0;
     }else{
         return Math.floor(sumOfAddedNumbers/count);
     }
     
 };