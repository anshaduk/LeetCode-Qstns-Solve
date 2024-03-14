n = 234
var subtractProductAndSum = function(n) {
    let newNo=n.toString().split('').map(Number)
    let sum=newNo.reduce((acc,curr)=>acc+curr,0)
    let mul=newNo.reduce((acc,curr)=>acc*curr)
    return mul-sum
    
};

subtractProductAndSum(n)