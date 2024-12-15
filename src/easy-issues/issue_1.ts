


export default function issue_1 (arg1: number[], arg2: number) {
  let step = 0; // to control time complexity
  for(let i = 0; i <= arg1.length - 2; i++) {
    for (let j = 1; j <= arg1.length - 1; j++) {
      step++
      if (i == j) continue
      if (arg1[i] + arg1[j] === arg2) {
        // return [i, j]
      }
    }
  }
  console.log(step)
}

/*
* Here is the way that thing can be improved
*
* 1. The problem of the solution is the time complexity. It is n^2
* The time complexity issue can be improved with HashMap or HashSet
*
*
function twoSum(nums: number[], target: number): number[] {
  // Hash table to store number->index mapping
  const ht = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if complement exists in hash table
    if (ht.has(target - num)) {
      // If found, return indices of both numbers
      return [ht.get(target - num)!, i];
    }

    // Store current number and its index in hash table
    ht.set(num, i);
  }

  // Return empty array if no solution found
  return [];
}
*
* The idea is to assign an extra map key pair for each element. Addressing these elements is O(1). But we will eventually only run a O(n) iteration over all elements in the map.
* */
