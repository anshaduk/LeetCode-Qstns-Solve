var multiply = function(num1, num2) {
    res=BigInt(num1)*BigInt(num2)
    newres=res.toString()
    return newres
};
num1 = "123456789", num2 = "987654321"
console.log(multiply(num1,num2)); 
