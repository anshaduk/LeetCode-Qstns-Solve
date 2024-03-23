var detectCapitalUse = function(word) {
    if(word===word.toUpperCase()||word===word.toLowerCase()||word.charAt(0)===word.charAt(0).toUpperCase()&&word.slice(1)===word.slice(1).toLowerCase())
    return true
    else
    return false
};
word = "UsA"
res=detectCapitalUse(word)
console.log(res)