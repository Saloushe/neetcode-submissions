class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let count = 0
        for (const detail of details) {
            if (Number(detail.substring(11, 13)) > 60) count += 1
        }
        return count
    }
}
