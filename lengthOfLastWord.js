var lengthOfLastWord = function(s) {
    let word=s.trim().split(" ").pop();
    console.log(word.length);
};
s = "Hello World"
let res=lengthOfLastWord(s)
