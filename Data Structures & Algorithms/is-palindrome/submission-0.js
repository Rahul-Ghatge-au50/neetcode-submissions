class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        const isAlphaNumeric = (char) => /[a-zA-Z0-9]/.test(char);

        while (i < j) {
            if (!isAlphaNumeric(s[i])) {
                i++;
            } else if (!isAlphaNumeric(s[j])) {
                j--;
            } else if (s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    }
}
