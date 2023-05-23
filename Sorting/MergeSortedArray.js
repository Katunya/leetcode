/*
88. Merge Sorted Array
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */




const merge = (nums1, m, nums2, n) => {
    let point1 = m - 1;
    let point2 = n - 1;

    let writePoint = m + n - 1;

    while(point2 >= 0 && point1 >= 0 ) {
        if(nums1[point1] < nums2[point2]) {
            nums1[writePoint] = nums2[point2];
            point2--;
        }

        else if (nums1[point1] > nums2[point2] || nums1[point1] ===  nums2[point2]){
            nums1[writePoint] = nums1[point1];
            point1--;
        }
        writePoint--;

    }

    while(point2 >= 0 ) {
        nums1[writePoint] = nums2[point2];
        point2 --;
        writePoint--;
    }
    return nums1;

}


console.log(merge([5, 6, 9, 0 , 0, 0], 3, [1, 2, 3],  3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6],  3));
