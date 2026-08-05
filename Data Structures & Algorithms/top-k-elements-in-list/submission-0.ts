

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Hint 2: Use priority queue instead of kArray
        const counter: Map<number, number> = new Map();
        // Dynamic push/pop of the top-k array during traversal of nums?
        // Just iterate over counter afterwards
        for (const num of nums) {
            counter.set(num, counter.get(num) ? counter.get(num) + 1 : 1)
        }
        let arr = [];
        for (const [key,v] of counter) {
            arr.push([key,v])
        }
        arr.sort(([key1, v1], [key2, v2]) => v1 - v2)
        let res = [];
        while (res.length < k) {
            res.push(arr.pop()[0])
        }
        return res
    }
}
