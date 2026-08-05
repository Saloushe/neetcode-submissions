class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length == 1) {
            return 0 // no transactions
        }
        let lowestVal = prices[0]
        let bestProfit = 0
        for (let i = 1; i < prices.length; i++) {
            let profit = prices[i] - lowestVal
            if (profit > bestProfit) {
                bestProfit = profit
            }
            if (prices[i] < lowestVal) {
                lowestVal = prices[i]
            }
        }
        return bestProfit
    }
}
