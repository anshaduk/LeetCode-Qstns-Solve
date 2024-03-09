var thirdMax = function(nums) {
    nums=Array.from(new Set(nums))
    nums.sort((a,b)=>b-a);
    if(nums.length<3){
        return nums[0]
    }else{
        return nums>=3?nums[2]:nums[0]
    }
    
};
let nums = [3,2,1]
//thirdMax(nums)
let res=thirdMax(nums);
console.log(res);