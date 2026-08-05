class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        // Order of ops is left to right
        // Need to store intermediate results
        // Use a stack?
        let inter: number;
        let operands: number[] = new Array<number>();
        let operators: string = '+-*/';
        for (let i = 0; i < tokens.length; i++) {
            if (!operators.includes(tokens[i])) {
                operands.push(Number(tokens[i]))
                continue
            }
            // Calculation Logic
            if (tokens[i] == "+") {
                let second = operands.pop()
                let first = operands.pop()
                operands.push(first + second)
            }
            if (tokens[i] == "-") {
                let second = operands.pop()
                let first = operands.pop()
                operands.push(first - second)
            }
            if (tokens[i] == "*") {
                let second = operands.pop()
                let first = operands.pop()
                operands.push(first * second)
            }
            if (tokens[i] == "/") {
                let second = operands.pop()
                let first = operands.pop()
                operands.push(Math.trunc(first / second))
            }
        }
        return operands.pop()
    }

}
