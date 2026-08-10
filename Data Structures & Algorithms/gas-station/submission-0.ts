class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        // How do determine which station to start at?
        // O(n) time: one or two loops?
        // Identify which stations do not have enough gas on their own to reach next station
        // Greedy approach: start at the station with the most gas, or have the most gas remaining after travel?
        let gasSum = gas.reduce((accumulator, current) => accumulator + current, 0);
        let costSum = cost.reduce((accumulator, current) => accumulator + current, 0);
        if (costSum > gasSum) return -1
        let total = 0
        let result = 0
        for (let i = 0; i < gas.length; i++) {
            total += (gas[i] - cost[i])
            if (total < 0) {
                total = 0
                result = i + 1
            }
        }
        return result
    }
}
