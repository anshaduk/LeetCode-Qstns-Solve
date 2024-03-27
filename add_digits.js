var addDigits = function(num) {
    newnum=num.toString()
    
    while(newnum.length>1){
        sum=0
        for(let i=0;i<newnum.length;i++){
            sum +=parseInt(newnum[i])
        }
        newnum=sum.toString()
    }
    
    return parseInt(newnum)
};
num = 12
res=addDigits(num)
console.log(res);