function sumTwoLargest(nums) {
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Array must contain at least two numbers.");
    }

    const sorted = nums.slice().sort((a, b) => b - a);
    return sorted[0] + sorted[1];
}

// Test Cases
console.log(sumTwoLargest([1, 4, 2, 3, 5]));
console.log(sumTwoLargest([10, 20, 30, 40]));
console.log(sumTwoLargest([-1, -2, -3, -4]));
console.log(sumTwoLargest([100, 5]));
console.log(sumTwoLargest([0, 0, 0, 0]));
