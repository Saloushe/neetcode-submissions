class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // Implement stack using Array, push and pop
        let stack = []
        for (const char of s) {
            if (stack.length == 0 && ')}]'.includes(char)) {
                return false
            }
            if (')}]'.includes(stack[stack.length - 1]) && '([{'.includes(char)) {
                return false
            }
            if (
                (stack[stack.length - 1] == "(" && char != ")" && !'([{'.includes(char)) ||
                (stack[stack.length - 1] == "{" && char != "}" && !'([{'.includes(char)) ||
                (stack[stack.length - 1] == "[" && char != "]" && !'([{'.includes(char))
            ) {
                return false
            }
            if ('([{'.includes(char)) {
                stack.push(char)
            } else {
                stack.pop()
            }
        }
        if (stack.length != 0) {
            return false
        }
        return true
    }
}
