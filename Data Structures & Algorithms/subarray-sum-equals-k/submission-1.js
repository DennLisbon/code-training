class Solution {

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixCount = new Map();
        prefixCount.set(0, 1);

        let sum = 0;
        let count = 0;

        for (const num of nums) {
            sum += num;

            if (prefixCount.has(sum - k)) {
                count += prefixCount.get(sum - k);
            }

            prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
        }

        return count;
    }

}