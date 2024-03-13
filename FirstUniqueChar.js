var firstUniqChar = function(s) {
    const charCount = {};
  
  // Count occurrences of each character
  for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
          return i;
      }
  }
  
  // If no non-repeating character found
  return -1;
}