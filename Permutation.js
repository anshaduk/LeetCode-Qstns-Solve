/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    function backtrack(currentPerm) {
        if (currentPerm.length === nums.length) {
            result.push([...currentPerm]);
            return;
        }
        
        for (let num of nums) {
            if (!currentPerm.includes(num)) {
                currentPerm.push(num);
                backtrack(currentPerm);
                currentPerm.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
};