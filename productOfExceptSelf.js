//let nums = [1,2,3,4]
var productExceptSelf = function(nums) {
    let n=nums.length;
    let leftProduct=new Array(n).fill(1)
    let rightProduct=new Array(n).fill(1)
    const result=new Array(n)

    for(i=1;i<n;i++){
        leftProduct[i]=leftProduct[i-1]*nums[i-1]
    }
    for (let i = n - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
    }
    for(i=0;i<n;i++){
        result[i]=Math.abs(leftProduct[i]*rightProduct[i])
    }
    return result
};
let nums = [-1,1,0,-3,3]
let res=productExceptSelf(nums)
console.log(res);