let word1 = ["a", "cb"]
let word2 = ["ab", "c"]
var arrayStringsAreEqual = function(word1, word2) {
    let newWord1=word1.join("")
    let newWord2=word2.join("")
    console.log(newWord1);
    console.log(newWord2);
    return newWord1===newWord2?true:false
};
let res=arrayStringsAreEqual(word1,word2)
console.log(res);