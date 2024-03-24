var findDuplicate = function(nums) {
    nums.sort()
   for(let i=0;i<nums.length-1;i++)
   {
    if(nums[i]===nums[i+1]){
        return nums[i]
    }
   }
   return null
};
nums = [3,3,3,3,3]
res=findDuplicate(nums)
console.log(res);