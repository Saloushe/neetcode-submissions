class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets: number[][], target: number[]): boolean {
        // calculate all possible permutations of numbers in triplets
        // Cannot use any triplets that have any numbers above target numbers
        // Slim down the number of possible merges by calculating first digit, then second, then third?
        // Iterate through target by number
        // Creates array of length triplets.length filled with indices, 0 to triplets.length
        let skips = new Set()
        for (let i = 0; i < triplets.length; i++) {
            if (triplets[i][0] > target[0] ||
                triplets[i][1] > target[1] ||
                triplets[i][2] > target[2] 
            ) {
                skips.add(i)
            }
        }
        let first = false
        let second = false
        let third = false
        for (let j = 0; j < triplets.length; j++) {
            if (skips.has(j)) continue
            if (triplets[j][0] == target[0]) first = true
            if (triplets[j][1] == target[1]) second = true
            if (triplets[j][2] == target[2]) third = true
        }
        if (first && second && third) return true
        return false
    }
}
