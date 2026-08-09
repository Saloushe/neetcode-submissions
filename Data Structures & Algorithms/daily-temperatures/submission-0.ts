class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack = []
        let result = new Array(temperatures.length)
        let lower
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length != 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                lower = stack.pop()
                result[lower] = i - lower 
            } 
            stack.push(i)
            result[i] = 0
        }
        return result
    }
}
