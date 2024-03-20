/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = mergeSortedArrays(nums1, nums2);
   const totalLength = merged.length;
   
   if (totalLength % 2 === 0) {
       const midRight = totalLength / 2;
       const midLeft = midRight - 1;
       return (merged[midLeft] + merged[midRight]) / 2;
   } else {
       const mid = Math.floor(totalLength / 2);
       return merged[mid];
   }
};
function mergeSortedArrays(nums1, nums2) {
   const merged = [];
   let i = 0, j = 0;

   while (i < nums1.length && j < nums2.length) {
       if (nums1[i] < nums2[j]) {
           merged.push(nums1[i]);
           i++;
       } else {
           merged.push(nums2[j]);
           j++;
       }
   }

   while (i < nums1.length) {
       merged.push(nums1[i]);
       i++;
   }

   while (j < nums2.length) {
       merged.push(nums2[j]);
       j++;
   }

   return merged;
}