function mostFrequentLengthStrings(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    const lengthCount = {};
    for (const str of arr) {
        const len = str.length;
        lengthCount[len] = (lengthCount[len] || 0) + 1;
    }

    const maxFreq = Math.max(...Object.values(lengthCount));
    const mostFrequentLengths = Object.keys(lengthCount)
        .filter(len => lengthCount[len] === maxFreq)
        .map(Number);

    return arr.filter(str => mostFrequentLengths.includes(str.length));
}

// Test
console.log(mostFrequentLengthStrings(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
console.log(mostFrequentLengthStrings(['a', 'abd', 'abc', 'cdf', 'def', 'gh']));
