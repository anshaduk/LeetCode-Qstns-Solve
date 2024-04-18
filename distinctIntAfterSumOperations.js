/**
 * @param {number[]} nums
 * @return {number}
 */
function countDistinctIntegers(nums) {
  
    const seen = new Set();
  
    for (const num of nums) {
      
      const rev = parseInt(num.toString().split('').reverse().join(''));
  
      
      seen.add(num);
      seen.add(rev);
    }
  
    
    return seen.size;
  }
  